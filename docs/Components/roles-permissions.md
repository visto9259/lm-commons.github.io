---
sidebar_position: 2
title: Roles and Permissions
---

LM-Commons provides components to add roles and permissions to your application.

## [LmcRbac](https://lm-commons.github.io/LmcRbac)

LmcRbac provides the authorization services to implement role-based access
control on top of Laminas\Permissions\Rbac.

Roles and permissions can be defined in simple local configuration file,
suitable for applications with a small set of roles and permissions, or in
database for application with larger sets of roles and permissions.

![Version](https://poser.pugx.org/lm-commons/lmc-rbac/v)
![Total Downloads](https://poser.pugx.org/lm-commons/lmc-rbac/downloads)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Flm-commons%2Flmcrbac%2Fproperties%2Fvalues&query=%24%5B%3A1%5D.value&label=Maintenance%20Status)

[Documentation](https://lm-commons.github.io/LmcRbac)

## [LmcRbacMezzio](https://lm-commons.github.io/lmc-rbac-mezzio)

LmcRbacMezzio provides middlewares to provide Role-based Access Control
(RBAC) for Mezzio applications.

LmcRbacMezzio provides:

- Route guards to control access to route based on roles.
- Strategies to handle unauthorized access, such as 403 response and redirection

![Version](https://poser.pugx.org/lm-commons/lmc-rbac-mezzio/v)
![Total Downloads](https://poser.pugx.org/lm-commons/lmc-rbac-mezzio/downloads)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Flm-commons%2Flmc-rbac-mezzio%2Fproperties%2Fvalues&query=%24%5B%3A1%5D.value&label=Maintenance%20Status)


[Documentation](https://lm-commons.github.io/lmc-rbac-mezzio)

## [LmcRbacMvc](https://lm-commons.github.io/LmcRbacMvc)

LmcRbacMvc is a companion component that extends the functionality of LmcRbac
to provide Role-based Access Control (RBAC) for Laminas MVC applications.

LmcRbacMvc provides:

- Route and controller guard to control access to route based on roles.
- Strategies to handle unauthorized access, such as 403 response and redirection
- Controller and view authorization plugins

:::warning
LmcRbacMvc is now in Maintenance-only.
See this [blog post](/blog/MVC-maintenance-only)
:::

![Version](https://poser.pugx.org/lm-commons/lmc-rbac-mvc/version)
![Total Downloads](https://poser.pugx.org/lm-commons/lmc-rbac-mvc/downloads)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Flm-commons%2Flmcrbacmvc%2Fproperties%2Fvalues&query=%24%5B%3A1%5D.value&label=Maintenance%20Status)

[Documentation](https://lm-commons.github.io/LmcRbacMvc)
