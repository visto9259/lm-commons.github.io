---
sidebar_position: 2
title: Roles and Permissions
---

LM-Commons provides components to add roles and permissions to your application.

## LmcRbac
[LmcRbac](https://lm-commons.github.io/LmcRbac) provides the authorization services to implement role-based access control on top of 
Laminas\Permissions\Rbac.

Roles and permissions can be defined in simple local configuration file, suitable for applications with
a small set of roles and permissions, or in database for application with larger sets of roles and permissions.

![Version](https://poser.pugx.org/lm-commons/lmc-rbac/v)
![Total Downloads](https://poser.pugx.org/lm-commons/lmc-rbac/downloads)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Flm-commons%2Flmcrbac%2Fproperties%2Fvalues&query=%24%5B%3A1%5D.value&label=Maintenance%20Status)

[Documentation](https://lm-commons.github.io/LmcRbac)

## LmcRbacMvc

[LmcRbacMvc](https://lm-commons.github.io/LmcRbacMvc) is a companion component that extends the functionality 
of LmcRbac to provide Role-based Access Control (RBAC) for Laminas MVC applications.

LmcRbacMvc provides:
- Route and controller guard to control access to route based on roles.
- Strategies to handle unauthorized access, such as 403 response and redirection
- Controller and view authorization plugins

![Version](https://poser.pugx.org/lm-commons/lmc-rbac-mvc/version)
![Total Downloads](https://poser.pugx.org/lm-commons/lmc-rbac-mvc/downloads)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Flm-commons%2Flmcrbacmvc%2Fproperties%2Fvalues&query=%24%5B%3A1%5D.value&label=Maintenance%20Status)

[Documentation](https://lm-commons.github.io/LmcRbacMvc)

## LmcRbacMezzio (future)

LmcRbacMezzio will be a companion component that extends the functionality
of LmcRbac to provide Role-based Access Control (RBAC) for Mezzio applications.