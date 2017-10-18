from setuptools import setup

import elife_api

setup(
    name='elife_api',
    version=elife_api.__version__,
    description='Utility for accessing eLife API JSON Schemas.',
    packages=['elife_api'],
    license='MIT',
    url='https://github.com/elifesciences/api-raml',
    maintainer='eLife Sciences Publications Ltd.',
    maintainer_email='tech-team@elifesciences.org',
    classifiers=[
        "Development Status :: 1 - Alpha",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3.5",
        ],
    include_package_data=True
)
