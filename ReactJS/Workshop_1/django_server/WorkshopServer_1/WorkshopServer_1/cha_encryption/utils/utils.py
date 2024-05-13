from Crypto.Random import get_random_bytes


def generate_key() -> bytes:
    """
    Generates a new key. Must be 32 bytes long.
    :return: Key.
    """
    return get_random_bytes(32)


def generate_nonce():
    """
    Generates a new nonce. Must be 24 bytes long to support XChaCha20.
    :return: Nonce.
    """
    return get_random_bytes(24)