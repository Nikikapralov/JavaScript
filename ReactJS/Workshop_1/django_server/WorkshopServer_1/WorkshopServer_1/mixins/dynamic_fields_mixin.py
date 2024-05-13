class DynamicFieldsMixin:
    """
    Must define a "fields" in View Class.
    """

    fields = "__all__"
    models = None

    def get_serializer(self, *args, **kwargs):
        """
        Return the serializer instance that should be used for validating and
        deserializing input, and for serializing output.
        """
        serializer_class = self.get_serializer_class()
        kwargs.setdefault('context', self.get_serializer_context())
        return serializer_class(fields=self.fields, models=self.models, *args, **kwargs)