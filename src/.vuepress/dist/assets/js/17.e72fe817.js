(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{286:function(e,t,s){"use strict";s.r(t);var r=s(14),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ssh-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh-keys"}},[e._v("#")]),e._v(" SSH Keys")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#introduction"}},[e._v("Introduction")])]),t("li",[t("a",{attrs:{href:"#adding-your-ssh-key-to-new-servers"}},[e._v("Adding Your SSH Key To New Servers")])]),t("li",[t("a",{attrs:{href:"#adding-ssh-key-to-existing-servers"}},[e._v("Adding SSH Key To Existing Servers")])]),t("li",[t("a",{attrs:{href:"#server-public-key"}},[e._v("Server Public Key")])]),t("li",[t("a",{attrs:{href:"#govps-public-key"}},[e._v("GoVPS Public Key")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("SSH is a protocol that allows you to access your server via a command line terminal. SSH keys are used to authenticate with your server over the SSH protocol. If you are new to SSH keys, we recommend checking out the "),t("a",{attrs:{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent",target:"_self",rel:"false"}},[e._v("GitHub documentation of generating SSH keys")]),e._v(" to get started.")]),e._v(" "),t("p",[e._v("After adding your SSH key to your server, you may SSH into the server without a password:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" forge@YOUR_SERVERS_PUBLIC_IP_ADDRESS\n")])])]),t("h2",{attrs:{id:"adding-your-ssh-key-to-new-servers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-your-ssh-key-to-new-servers"}},[e._v("#")]),e._v(" Adding Your SSH Key To New Servers")]),e._v(" "),t("p",[e._v("Before you provision a server for the first time, you should add your SSH keys to your account. You can do this from the your accounts "),t("a",{attrs:{href:"https://govps.org/user-profile/ssh-keys",target:"_self",rel:"false"}},[e._v("SSH Keys page")]),e._v(" in the GoVPS dashboard.")]),e._v(" "),t("p",[e._v("As part of the provisioning process, GoVPS will add all your active SSH keys to the "),t("code",[e._v("govps")]),e._v(" account. This will allow you to SSH into the server as the "),t("code",[e._v("govps")]),e._v(" user.")]),e._v(" "),t("p",[e._v("If any of your sites are using User Isolation, you will be asked to select the user you want to add the key to. You will then be able to SSH into the server as that user.")]),e._v(" "),t("h2",{attrs:{id:"adding-ssh-key-to-existing-servers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-ssh-key-to-existing-servers"}},[e._v("#")]),e._v(" Adding SSH Key To Existing Servers")]),e._v(" "),t("p",[e._v("If you already have servers provisioned and want to add a new SSH key to several servers at once, then first add your key to your account via the "),t("a",{attrs:{href:"https://govps.org/user-profile/ssh-keys",target:"_self",rel:"false"}},[e._v("SSH Keys page")]),e._v('. Once it is listed in the "Active Keys", you may use the "Add To Servers" action and select which servers you would like the key added to.')]),e._v(" "),t("p",[e._v("You can also "),t("RouterLink",{attrs:{to:"/1.0/servers/ssh.html"}},[e._v("add SSH keys directly to a server")]),e._v(" without adding them to your account.")],1),e._v(" "),t("h2",{attrs:{id:"server-public-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-public-key"}},[e._v("#")]),e._v(" Server Public Key")]),e._v(" "),t("p",[e._v("During the provisioning process, GoVPS will generate its own keypair so that it may access the server. It will add the public key from this keypair to the "),t("code",[e._v("authorized_keys")]),e._v(" file of both the "),t("code",[e._v("root")]),e._v(" and "),t("code",[e._v("govps")]),e._v(" users.")]),e._v(" "),t("h2",{attrs:{id:"govps-public-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#govps-public-key"}},[e._v("#")]),e._v(" GoVPS Public Key")]),e._v(" "),t("p",[e._v("During the provisioning process, GoVPS will generate a public key for the "),t("code",[e._v("govps")]),e._v(" user. This is used by Git to clone the projects to your server. The key will be added to the source control provider. This key is located at "),t("code",[e._v("/home/forge/.ssh/id_rsa.pub")]),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);