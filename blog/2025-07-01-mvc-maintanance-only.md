---
slug: MVC-maintenance-only
title: LMC MVC-based Modules are now maintenance only
authors: [ericr]
tags: [lm-commons, MVC, upgrade]
---
With the announcement from the Laminas Technical Committee to put all Laminas MVC components into maintenance-only,
we have decided to do the same for the LMC packages that are based on Laminas MVC.

Therefore, the following packages will be set to Maintenance-Only and no new features will be developed but they will
be updated to support PHP 8.5:

| Package                  | Version | Comments                    |
|--------------------------|---------|-----------------------------|
| LmcUser                  | 3       | Version 4 will be abandoned |
| LmcUserDoctrineORM       | All     |                             |
| LmcUserDoctrineMongoODM  | All     |                             |
| LmcRbacMvc               | All     |                             |
| LmcRbacMvcDeveloperTools | 1       |                             |
| LmcCors                  | 1       | Version 2 is abandoned      |
| LmcAdmin                 | All     |                             |
| LmcMail                  | 1       | Abandoned                   |

### New Mezzio Packages

New packages will be developed for Mezzio as replacements for Laminas MVC based packages.
These will be announced later.