(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{297:function(e,t,a){"use strict";a.r(t);var s=a(14),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"database-backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database-backups"}},[e._v("#")]),e._v(" Database Backups")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),t("li",[t("a",{attrs:{href:"#creating-backup-configurations"}},[e._v("Creating Backup Configurations")]),t("ul",[t("li",[t("a",{attrs:{href:"#storage-providers"}},[e._v("Storage Providers")])]),t("li",[t("a",{attrs:{href:"#frequency-options"}},[e._v("Frequency Options")])]),t("li",[t("a",{attrs:{href:"#backup-retention"}},[e._v("Backup Retention")])]),t("li",[t("a",{attrs:{href:"#notifications-for-failed-backups"}},[e._v("Notifications For Failed Backups")])])])]),t("li",[t("a",{attrs:{href:"#managing-backups"}},[e._v("Managing Backups")]),t("ul",[t("li",[t("a",{attrs:{href:"#editing-backups"}},[e._v("Editing Backups")])]),t("li",[t("a",{attrs:{href:"#deleting-backup-configurations"}},[e._v("Deleting Backup Configurations")])]),t("li",[t("a",{attrs:{href:"#restoring-backups"}},[e._v("Restoring Backups")])]),t("li",[t("a",{attrs:{href:"#deleting-backups"}},[e._v("Deleting Backups")])]),t("li",[t("a",{attrs:{href:"#backup-output"}},[e._v("Backup Output")])])])]),t("li",[t("a",{attrs:{href:"#circle-permissions"}},[e._v("Circle Permissions")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("GoVPS supports automated database backups that can be scheduled directly from your server's GoVPS dashboard. You can choose to backup one or more databases at a specified frequency and also restore any of your recent backups. The backup script used by GoVPS is open source and can be "),t("a",{attrs:{href:"https://github.com/laravel/forge-database-backups",target:"_self",rel:"false"}},[e._v("found on GitHub")]),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Business Plan Only")]),e._v(" "),t("p",[e._v('Database backups are only available on our "business" plan.')])]),e._v(" "),t("h2",{attrs:{id:"creating-backup-configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-backup-configurations"}},[e._v("#")]),e._v(" Creating Backup Configurations")]),e._v(" "),t("h3",{attrs:{id:"storage-providers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storage-providers"}},[e._v("#")]),e._v(" Storage Providers")]),e._v(" "),t("p",[e._v("You can choose to backup your databases to:")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://aws.amazon.com/s3/",target:"_self",rel:"false"}},[e._v("Amazon S3")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.digitalocean.com/products/spaces",target:"_self",rel:"false"}},[e._v("DigitalOcean Spaces")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.scaleway.com/en/object-storage/",target:"_self",rel:"false"}},[e._v("Scaleway")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.ovhcloud.com/en/public-cloud/object-storage/",target:"_self",rel:"false"}},[e._v("OVH Cloud")])]),e._v(" "),t("li",[e._v("Custom (S3 Compatible)")])]),e._v(" "),t("p",[e._v("For Amazon S3, DigitalOcean Spaces, Scaleway, and OVH Cloud storage providers you need to provide GoVPS with:")]),e._v(" "),t("ul",[t("li",[e._v("The region your backup should be stored in ("),t("code",[e._v("eu-west-2")]),e._v(", "),t("code",[e._v("nyc3")]),e._v(" etc..)")]),e._v(" "),t("li",[e._v('The name of the storage "bucket"')]),e._v(" "),t("li",[e._v("The access / secret keys that should be used to connect to the storage service")])]),e._v(" "),t("p",[e._v('When using Amazon S3 in combination with an EC2 server, you can alternatively choose to use the identity of the EC2 server to\nstream the backup to S3 without providing credentials. In this case, you only need to check the "Use EC2 Assumed Role" checkbox.')]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("AWS IAM Permissions")]),e._v(" "),t("p",[e._v("When using Amazon S3 to store your database backups, your AWS IAM user must have the following permissions for S3:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("s3:PutObject")])]),e._v(" "),t("li",[t("code",[e._v("s3:GetObject")])]),e._v(" "),t("li",[t("code",[e._v("s3:ListBucket")])]),e._v(" "),t("li",[t("code",[e._v("s3:DeleteObject")])])])]),e._v(" "),t("p",[e._v("When using a custom, S3 compatible provider, you must supply:")]),e._v(" "),t("ul",[t("li",[e._v("The service endpoint / URL")]),e._v(" "),t("li",[e._v('The name of the storage "bucket"')]),e._v(" "),t("li",[e._v("The access / secret keys that should be used to connect to the storage service")])]),e._v(" "),t("p",[e._v("You can also choose to provide a storage directory where backups will be restored relative to your bucket root. If left empty, backups will be stored within the root of your bucket.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Provider Compatibility")]),e._v(" "),t("p",[e._v("Not all providers are 100% compatible with Amazon S3's API. Some providers, such as OVH and Scaleway, require a custom configuration to work correctly, typically through the use of "),t("code",[e._v("awscli-plugin-endpoint")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"frequency-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frequency-options"}},[e._v("#")]),e._v(" Frequency Options")]),e._v(" "),t("p",[e._v("Within the GoVPS database backup dashboard, you can select the frequency at which your database should be backed up:")]),e._v(" "),t("ul",[t("li",[e._v("Hourly")]),e._v(" "),t("li",[e._v("Daily (at a given time)")]),e._v(" "),t("li",[e._v("Weekly (on a given day and time)")]),e._v(" "),t("li",[e._v("Custom")])]),e._v(" "),t("p",[e._v("When using the API to create a "),t("strong",[e._v("Daily")]),e._v(" or "),t("strong",[e._v("Weekly")]),e._v(" backup, you may provide any valid time (e.g. "),t("code",[e._v("13:37")]),e._v(") to your schedule; however, for the sake of simplicity, the GoVPS UI allows you to select a time in 30 minute intervals. The time you select should be in your local time as reported by your web browser.")]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("Custom")]),e._v(" option allows you to provide a custom cron expression. You may wish to use a service such as "),t("a",{attrs:{href:"https://crontab.guru",target:"_self",rel:"false"}},[e._v("crontab.guru")]),e._v(" to help you generate this.")]),e._v(" "),t("h3",{attrs:{id:"backup-retention"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup-retention"}},[e._v("#")]),e._v(" Backup Retention")]),e._v(" "),t("p",[e._v('GoVPS will automatically prune old backups for you. For example, if you have configured a backup retention rate of "five", only the last five backups will be stored within your storage provider.')]),e._v(" "),t("h3",{attrs:{id:"notifications-for-failed-backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notifications-for-failed-backups"}},[e._v("#")]),e._v(" Notifications For Failed Backups")]),e._v(" "),t("p",[e._v("You may provide an email address to be notified when a backup fails. If you need to notify multiple people, you should create a distribution list such as "),t("code",[e._v("team@example.com")]),e._v(".")]),e._v(" "),t("p",[e._v("GoVPS will also display failed backups within the "),t("strong",[e._v("Backups")]),e._v(" panel of the GoVPS server's management dashboard.")]),e._v(" "),t("h2",{attrs:{id:"managing-backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#managing-backups"}},[e._v("#")]),e._v(" Managing Backups")]),e._v(" "),t("h3",{attrs:{id:"editing-backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#editing-backups"}},[e._v("#")]),e._v(" Editing Backups")]),e._v(" "),t("p",[e._v("Existing backup configurations may be edited via the GoVPS UI. By default, the configuration details are locked to prevent accidental edits. You may click the "),t("strong",[e._v("Edit")]),e._v(" button to unlock editing.")]),e._v(" "),t("p",[e._v("When changing the databases that should be backed up, GoVPS will ask for confirmation that it was an intended change. This is to prevent any future data loss in the event that a database is no longer part of a backup configuration.")]),e._v(" "),t("h3",{attrs:{id:"deleting-backup-configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deleting-backup-configurations"}},[e._v("#")]),e._v(" Deleting Backup Configurations")]),e._v(" "),t("p",[e._v("You can delete a backup configuration by clicking the "),t("strong",[e._v("Delete")]),e._v(" button next to your chosen backup configuration under the "),t("strong",[e._v("Backup Configurations")]),e._v(" section of the server's "),t("strong",[e._v("Backups")]),e._v(" dashboard.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Backup Archives")]),e._v(" "),t("p",[e._v("When deleting a backup configuration, your backup archives "),t("strong",[e._v("will not be removed from cloud storage")]),e._v(". You may remove these manually if you wish.")])]),e._v(" "),t("h3",{attrs:{id:"restoring-backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restoring-backups"}},[e._v("#")]),e._v(" Restoring Backups")]),e._v(" "),t("p",[e._v("You can restore backups to your database via the "),t("strong",[e._v("Recent Backups")]),e._v(" section. Click the "),t("strong",[e._v("Restore")]),e._v(" button next to your chosen backup. Backups will be restored to the database they were created from. If the backup configuration contains more than one database, you will be asked to select which database to restore.")]),e._v(" "),t("p",[e._v("If you need to restore a backup to another server or database you may download the backup archive from your cloud storage provider and restore it using a database management tool such as "),t("a",{attrs:{href:"https://tableplus.com",target:"_self",rel:"false"}},[e._v("TablePlus")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"deleting-backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deleting-backups"}},[e._v("#")]),e._v(" Deleting Backups")]),e._v(" "),t("p",[e._v("If you need to delete an individual backup, you can do this by clicking the Delete button next to the backup.")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("Deleting Backups")]),e._v(" "),t("p",[e._v("When deleting a backup, your backup archives "),t("strong",[e._v("will be removed")]),e._v(" from your cloud storage provider. Please take caution when removing backups.")])]),e._v(" "),t("h3",{attrs:{id:"backup-output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup-output"}},[e._v("#")]),e._v(" Backup Output")]),e._v(" "),t("p",[e._v('Each backup process will create its own log so that you can inspect the database backup process\'s output in the event of a failure. You can view the output of a backup by clicking the "Eye" icon next to your backup.')]),e._v(" "),t("h2",{attrs:{id:"circle-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#circle-permissions"}},[e._v("#")]),e._v(" Circle Permissions")]),e._v(" "),t("p",[e._v("The ability to manage database backups is split into two permissions.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("server:create-backups")])]),e._v(" "),t("li",[t("code",[e._v("server:delete-backups")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);