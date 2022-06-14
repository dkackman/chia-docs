---
sidebar_position: 1
---

# 9.1 BLS Keys

This section will explain the different types of keys in the Chia network. It will also cover how the keys are generated, stored, and used. These systems are designed to be flexible enough to support many different configurations and pooling setups and to be resilient to various attacks.

All Chia keys are [BLS-12-381](https://github.com/zkcrypto/bls12_381) private keys, following the [IETF specification](https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/), the [EIP-2333](https://eips.ethereum.org/EIPS/eip-2333) specification for key derivation and [BIP 44 registered](https://github.com/satoshilabs/slips/blob/master/slip-0044.md). Private keys are 32 bytes, public keys 48 bytes, and signatures 96 bytes (public keys are points in G1, signatures are points in G2.)

  >WARNING: There is a slight difference between Chia's implementation and EIP-2333, as described in the next section.

BLS signatures allow for many features and optimizations, such as non-interactive m/n thresholds, aggregation of all signatures in a block, and [chialisp](https://chialisp.com) tricks like combining two coins into the same transaction.

A 24-word mnemonic phrase is used as entropy in order to generate a private BLS key. The recommended method of key backup is to store the 24-word phrase offline. Recovery can then be performed by entering the 24-word phrase. The private key is not required for recovery.

In theory, wallet recovery could also be performed from the master private key alone. However, there are some caveats:
  * Chia Network Inc has not attempted this, and has no plans to attempt it. In fact, as far as we know, nobody has attempted it, so it is not guaranteed to work. It is not supported, and likely never will be supported. Use at your own risk
  * Because this is not supported, you would need to create your own wallet in order to perform this recovery
  * Even after a successful wallet recovery, you would not be able to recover your 24-word mnemonic phrase. The phrase is used as entropy to generate a private key; a phrase _cannot_ be generated _from_ a private key

The BLS master private key is stored in the OS keychain, which usually requires password authentication and is encrypted.

  > Note: In theory, wallet recovery should be possible on a new system by copying the keychain from a system on which the wallet has already been installed. However, this is not supported. The only supported method of wallet recovery is with the 24-word seed phrase.

The master private key can be used to derive child keys, which can further be used to derive child keys, etc. The number of levels can be infinite. BLS public keys can be combined to form a new public key, which can be used to validate aggregate signatures.

Each time the wallet generates a new address to receive funds, it creates a new BLS private key. The farmer and pool only use the first key in the current codebase, but they can be updated to generate a new key every time a block is won, for additional privacy.

When it comes to getting paid, a chialisp program is created that uses one of the wallet BLS public keys. This program, called a _puzzle_, is hashed to generate a puzzle hash. The puzzle hash is then converted to an address in bech32m format, for easy error correction and usability.

So an address is analogous to a wallet child BLS public key, the private key of which can be derived from the master seed.

<figure>
<img src="/img/keys/hd_keys.png" alt="drawing"/>
</figure>

## Difference between Chia and EIP-2333

Chia committed to its final plot format in July 2020. This format uses keys compliant with IETF BLS version 2, as specified in the [IRTF CFRG BLS standard](https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/).

IETF BLS version 4 introduced some optional changes, one of which was not backwards compatible with version 2. Because of this incompatibility, Chia will continue to use keys as specified in version 2. These keys are compliant with version 4, though they differ from the recommended method of generation.

**IETF BLS Version 2 and 4 are both secure.**

Here is the incompatible change:

```
  Procedure:
   1. salt = "BLS-SIG-KEYGEN-SALT-"
   2. SK = 0
   3. while SK == 0:
   4.     salt = H(salt)
   5.     PRK = HKDF-Extract(salt, IKM || I2OSP(0, 1))
   6.     OKM = HKDF-Expand(PRK, key_info || I2OSP(L, 2), L)
   7.     SK = OS2IP(OKM) mod r
   8. return SK

   KeyGen is the RECOMMENDED way of generating secret keys, but its use
   is not required for compatibility, and implementations MAY use a
   different KeyGen procedure.  For security, such an alternative KeyGen
   procedure MUST output SK that is statistically close to uniformly
   random in the range 1 <= SK < r.
```

## Non-Observer vs Observer Keys

There are two ways in which child keys can be derived from parent keys: non-observer and observer (also called hardened and unhardened).

Non-observer keys are the default, and only supported, method in the EIP-2333 spec. They are secure, since each key is cryptographically separated -- revealing one key has no impact on the security of its ancestors or siblings. However, non-observer keys are limited in functionality, because they can only be derived through private derivation. That is, a parent _private_ key can be used to derive a child _private_ key, but a parent _public_ key cannot be used to derive a child _public_ key.

Observer keys do allow public derivation. This enables view-only wallets that support viewing _all_ of your public keys, using only the root (master) public key. This is what is usually done for Bitcoin Hierarchical Deterministic (HD) view-only wallets. It enables more privacy when compared to systems like Ethereum, which reuse the same address for all transactions.

One advantage of observer keys is tax calculation: if you use a different address for each transaction, you only need to give your accountant your parent public key, who can use it to derive all of your child addresses. This would not be possible with non-observer keys.

The main security drawback of observer keys is that if you accidentally reveal a single child private key, along with the parent public key, then your parent private key and all sibling keys can be calculated as well.

At the time of Chia's mainnet launch in March and May 2021, only non-observer keys were used. Beginning with the Light Wallet Beta release (December 2021), observer keys are supported -- and preferred -- for view only-wallet support. The first full release with built-in support for observer keys is 1.3 (February 2022).