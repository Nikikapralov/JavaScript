from django.core.exceptions import ValidationError


def custom_email_validator(email: str) -> None:
    """
    Make sure that the provided email has at least 3 characters after the @ symbol.
    :param email: Provided email.
    :return: None/raise Error
    """
    if "@" not in email:
        raise ValidationError(f"An email must have a '@' in it."
                              f"Provided email: {email} does not contain a @.")
    LIMIT: int = 3
    first_part, second_part = email.split("@")
    if len(second_part) < LIMIT:
        raise ValidationError(f"Characters after the @ value should be at least {LIMIT}.\n"
                              f"Current amount of characters: {len(second_part)}")


def custom_url_validator(url: str) -> None:
    """
    Make sure that the URL starts with https://
    :param url: The provided url.
    :return: None/raise Error.
    """
    START: str = "https://"
    if not url.startswith(START):
        raise ValidationError(f"The URL must start with {START}")


def custom_phone_number_validator(phone_number: str) -> None:
    """
    Make sure that the phone number starts with a 0 and has a length of 10 chars.
    :param phone_number: The provided phone number.
    :return: None/raise Error.
    """
    START: str = "0"
    EXACT_LENGTH: int = 10
    if not phone_number.startswith(START) and len(phone_number) == EXACT_LENGTH:
        raise ValidationError(f"The phone number does not start with {START}\n"
                              f" or is not exactly {EXACT_LENGTH} chars long.")


