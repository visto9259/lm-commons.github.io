---
sidebar_position: 1
---

# Introduction

LmcUser is a user registration and authentication module for Laminas.
LmcUser provides the foundations for adding
user authentication and registration to your Laminas site. It is designed to be very
simple and easy to extend.

More information and examples are available on the [LmcUser Wiki](https://github.com/LM-Commons/LmcUser/wiki)

Based on ZfcUser by Evan Coury and the ZF-Commons team

## Requirements

* [Laminas](https://github.com/laminas/) (latest master)

## Features / Goals

* Authenticate via username, email, or both (can opt out of the concept of
  username and use strictly email) [COMPLETE]
* User registration [COMPLETE]
* Forms protected against CSRF [COMPLETE]
* Out-of-the-box support for Doctrine2 _and_ Laminas\Db [COMPLETE]
* Robust event system to allow for extending [COMPLETE]
* Provide ActionController plugin and view helper [COMPLETE]