from django.core.management.base import BaseCommand
from WorkshopServer_1.cha_encryption.utils.utils import generate_key

class Command(BaseCommand):
    """
    Creates a cypher key and displays in on the screen.
    """
    help = "Creates a 32 bytes cypher key and displays in on the screen."

    def handle(self, *args, **options):
        key: bytes = generate_key()
        print(key)
