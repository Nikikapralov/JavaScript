from django.core.management.base import BaseCommand
from ....cha_encryption.utils.utils import generate_nonce

class Command(BaseCommand):
    """
    Creates a nonce and displays in on the screen.
    """
    help = "Creates a 24 bytes nonce and displays in on the screen."

    def handle(self, *args, **options):
        nonce: bytes = generate_nonce()
        print(nonce)
