; Specify the version of Drupal being used.
core = 8.x
; Specify the api version of Drush Make.
api = 2
; N/A
; Patching mmenu.module.
projects[mmenu][patch][] = "patches/0001-mmenu.libraries.yml-remove-icomoon.css.patch"

; Undefined index: entity_id in theme_mmenu_tree()
; https://www.drupal.org/node/2724275
projects[mmenu][patch][] = "https://www.drupal.org/files/issues/2724275.patch"

; Fatal PHP error in setContext if subscriber was deleted
; https://www.drupal.org/node/2868214
projects[simplenews][patch][] = "https://www.drupal.org/files/issues/fatal_php_error_in_setcontext-2868214-1.patch"

; Preserving destination parameter prevents redirects
; https://www.drupal.org/node/2838237
projects[login_destination][patch][] = "https://www.drupal.org/files/issues/destination-fix.patch"

; The locality.name data is missed in PlainFormater
; https://www.drupal.org/node/2881391
projects[address][patch][] = "https://www.drupal.org/files/issues/locality-name-data-missed-plainformater-2881391-1.patch"
