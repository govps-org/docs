(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{302:function(e,t,r){"use strict";r.r(t);var s=r(14),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"monitoring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[e._v("#")]),e._v(" Monitoring")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),t("li",[t("a",{attrs:{href:"#monitor-types"}},[e._v("Monitor Types")]),t("ul",[t("li",[t("a",{attrs:{href:"#cpu-load-average"}},[e._v("CPU Load Average")])]),t("li",[t("a",{attrs:{href:"#used-disk-space"}},[e._v("Used Disk Space")])]),t("li",[t("a",{attrs:{href:"#used-memory"}},[e._v("Used Memory")])])])]),t("li",[t("a",{attrs:{href:"#creating-monitors"}},[e._v("Creating Monitors")]),t("ul",[t("li",[t("a",{attrs:{href:"#stat-collection-frequencies"}},[e._v("Stat Collection Frequencies")])])])]),t("li",[t("a",{attrs:{href:"#circle-permissions"}},[e._v("Circle Permissions")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("GoVPS can be configured to monitor the following metrics on your server and email you when their state changes:")]),e._v(" "),t("ul",[t("li",[e._v("CPU Load Average")]),e._v(" "),t("li",[e._v("Used Disk Space")]),e._v(" "),t("li",[e._v("Used Memory")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Business Plan Only")]),e._v(" "),t("p",[e._v('Server monitoring is only available on our "business" plan.')])]),e._v(" "),t("h2",{attrs:{id:"monitor-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monitor-types"}},[e._v("#")]),e._v(" Monitor Types")]),e._v(" "),t("h3",{attrs:{id:"cpu-load-average"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu-load-average"}},[e._v("#")]),e._v(" CPU Load Average")]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("CPU Load Average")]),e._v(" monitor will track the server's load average. This is based on the average system load over a one minute interval.")]),e._v(" "),t("h3",{attrs:{id:"used-disk-space"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#used-disk-space"}},[e._v("#")]),e._v(" Used Disk Space")]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("Used Disk Space")]),e._v(" monitor tracks the amount of disk space that has been used on the primary drive.")]),e._v(" "),t("h3",{attrs:{id:"used-memory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#used-memory"}},[e._v("#")]),e._v(" Used Memory")]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("Used Memory")]),e._v(" monitor tracks how much of the RAM is in active use.")]),e._v(" "),t("h2",{attrs:{id:"creating-monitors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-monitors"}},[e._v("#")]),e._v(" Creating Monitors")]),e._v(" "),t("p",[e._v("You may configure a new monitor from the "),t("strong",[e._v("Monitoring")]),e._v(" tab within a server's management dashboard. Below is a brief overview of how to create and configure a monitoring metric:")]),e._v(" "),t("ol",[t("li",[e._v("Select the metric to monitor.")]),e._v(" "),t("li",[e._v("Select whether the value of the metric should be "),t("code",[e._v(">=")]),e._v(" or "),t("code",[e._v("<=")]),e._v(" a threshold.")]),e._v(" "),t("li",[e._v("Enter the threshold percentage that the metric would need to meet before notifying you.")]),e._v(" "),t("li",[e._v("Enter how long (in minutes) the metric needs to exceed the threshold criteria for before you are notified.")]),e._v(" "),t("li",[e._v("Enter an email address to notify when the monitor's state changes.")]),e._v(" "),t("li",[e._v("Click "),t("strong",[e._v("Install Monitor")]),e._v(".")])]),e._v(" "),t("p",[e._v("Once the monitor is installed, your server will begin collecting metric data data and notify you once the state changes.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Notifying Multiple People")]),e._v(" "),t("p",[e._v("GoVPS will only accept one email address to notify. If you need to notify multiple people, you should create a distribution list such as "),t("code",[e._v("team@example.com")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"stat-collection-frequencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stat-collection-frequencies"}},[e._v("#")]),e._v(" Stat Collection Frequencies")]),e._v(" "),t("p",[e._v("The CPU Load and Used Memory metric data will be collected every minute. The Disk Space metric will be collected hourly.")]),e._v(" "),t("h2",{attrs:{id:"circle-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#circle-permissions"}},[e._v("#")]),e._v(" Circle Permissions")]),e._v(" "),t("p",[e._v("The ability to manage server monitors is split into two permissions:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("server:create-monitors")])]),e._v(" "),t("li",[t("code",[e._v("server:delete-monitors")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);