import os

import elife_api

__version__ = '0.0.1'


schema_directory = os.path.dirname(elife_api.__file__)


__all__ = [schema_directory]
