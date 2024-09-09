from Crypto.Cipher import ChaCha20
from base64 import b64encode, b64decode


def encrypt_val(value: str | int | float, nonce: bytes, key: bytes) -> tuple[str, str]:
    """
    Encrypt the value using the XChaCha20 algorithm.
    :param value: The value to be encrypted.
    :param nonce: The 24 bytes nonce to be used.
    :param key: The 32 bytes encryption key.
    :return: The encrypted value and the nonce.
    """
    if not isinstance(value, str):
        value: str = str(value)
    value: bytes = value.encode()
    cipher: ChaCha20 = ChaCha20.new(key=key, nonce=nonce)
    ciphertext: bytes = cipher.encrypt(plaintext=value)
    ct: str = b64encode(ciphertext).decode('utf-8')
    nonce: str = b64encode(nonce).decode('utf-8')
    return ct, nonce


def decrypt_val(value: str, nonce: str, key: bytes) -> str:
    """
    Decrypt the provided value from the XChaCha20 algorithm.
    :param value: Encrypted value.
    :param nonce: The 24 bytes nonce to be used.
    :param key: The 32 bytes encryption key.
    :return: The decrypted value.
    """
    nonce: bytes = b64decode(nonce)
    cipher: ChaCha20 = ChaCha20.new(key=key, nonce=nonce)
    ciphertext: bytes = b64decode(value)
    plaintext: bytes = cipher.decrypt(ciphertext=ciphertext)
    return plaintext.decode("utf8")

