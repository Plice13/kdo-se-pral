!function (e, t) {
  "object" == typeof exports && "object" == typeof module
      ? module.exports = t()
      : "function" == typeof define && define.amd
          ? define("darkmode-js", [], t)
          : "object" == typeof exports
              ? exports["darkmode-js"] = t()
              : e["darkmode-js"] = t()
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
      var t = {};

      function n(o) {
          if (t[o]) return t[o].exports;
          var r = t[o] = { i: o, l: !1, exports: {} };
          return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
      }

      return n.m = e,
          n.c = t,
          n.d = function (e, t, o) {
              n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
          },
          n.r = function (e) {
              "undefined" != typeof Symbol && Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
              Object.defineProperty(e, "__esModule", { value: !0 });
          },
          n.t = function (e, t) {
              if (1 & t && (e = n(e)), 8 & t) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var o = Object.create(null);
              if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                  for (var r in e) n.d(o, r, function (t) { return e[t] }.bind(null, r));
              return o;
          },
          n.n = function (e) {
              var t = e && e.__esModule ? function () { return e.default } : function () { return e };
              return n.d(t, "a", t), t;
          },
          n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) },
          n.p = "",
          n(n.s = 0)
  }([

      function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.default = void 0;

          var o = function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                  for (var n in e)
                      if (Object.prototype.hasOwnProperty.call(e, n)) {
                          var o = Object.defineProperty && Object.getOwnPropertyDescriptor
                              ? Object.getOwnPropertyDescriptor(e, n)
                              : {};
                          o.get || o.set ? Object.defineProperty(t, n, o) : t[n] = e[n];
                      }
              return t.default = e, t;
          }(n(1));

          var r = o.default;
          t.default = r;
          o.IS_BROWSER && function (e) { e.Darkmode = o.default }(window);
          e.exports = t.default;
      },

      function (e, t, n) {
          "use strict";

          function o(e, t) {
              for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  o.enumerable = o.enumerable || !1;
                  o.configurable = !0;
                  "value" in o && (o.writable = !0);
                  Object.defineProperty(e, o.key, o);
              }
          }

          Object.defineProperty(t, "__esModule", { value: !0 });
          t.default = t.IS_BROWSER = void 0;

          var r = "undefined" != typeof window;
          t.IS_BROWSER = r;

          var a = function () {
              function e(t) {
                  if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");

                  if (r) {
                      t = Object.assign({
                          bottom: '64px',        // Distance from bottom (for moon box)
                          right: '32px',         // Distance from right (for moon box)
                          left: 'unset',         // Optional: adjust left position
                          time: '0.3s',          // Transition time for mode switching
                          lightCSS: [
                            '{{ .Site.BaseURL }}css/root.css',
                            '{{ .Site.BaseURL }}css/base.css',
                            '{{ .Site.BaseURL }}css/home.css',
                            '{{ .Site.BaseURL }}css/contact.css',
                            '{{ .Site.BaseURL }}css/location.css',
                            '{{ .Site.BaseURL }}css/report.css',
                            '{{ .Site.BaseURL }}css/single.css',
                            '{{ .Site.BaseURL }}css/speakers.css'
                        ],  // Array of light theme CSS paths
                        darkCSS: [
                            '{{ .Site.BaseURL }}css-dark/root.css',
                            '{{ .Site.BaseURL }}css-dark/base.css',
                            '{{ .Site.BaseURL }}css-dark/home.css',
                            '{{ .Site.BaseURL }}css-dark/contact.css',
                            '{{ .Site.BaseURL }}css-dark/location.css',
                            '{{ .Site.BaseURL }}css-dark/report.css',
                            '{{ .Site.BaseURL }}css-dark/single.css',
                            '{{ .Site.BaseURL }}css-dark/speakers.css'
                        ],  // Array of dark theme CSS paths
                        label: '🌙',            // Unicode moon icon (default label for moon box)
                          saveInCookies: true,   // Store the preference in cookies
                          autoMatchOsTheme: true // Automatically match the OS theme
                      }, t);

                      // Create and insert the "moon box"
                      var o = document.createElement("div");
                      o.innerHTML = t.label || '🌙';  // Default moon label (can be any icon)
                      o.classList.add("darkmode-toggle");
                      o.classList.add("darkmode-toggle--inactive");
                      o.style.position = 'fixed';
                      o.style.bottom = t.bottom;
                      o.style.right = t.right;
                      o.style.fontSize = '24px';
                      o.style.padding = '10px';
                      o.style.borderRadius = '50%';
                      o.style.backgroundColor = '#fff'; // White background for box
                      o.style.cursor = 'pointer';
                      o.style.transition = `all ${t.time}`;
                      document.body.appendChild(o);

                      // Add event listener to toggle dark mode and count clicks
                      this.clickCount = 0; // Initialize click counter
                      this.clickDisplay = document.createElement("div");
                      this.clickDisplay.style.position = 'fixed';
                      this.clickDisplay.style.bottom = '100px'; // Position above the button
                      this.clickDisplay.style.right = '32px';
                      this.clickDisplay.style.backgroundColor = '#fff';
                      this.clickDisplay.style.padding = '10px';
                      this.clickDisplay.style.fontSize = '16px';
                      this.clickDisplay.style.borderRadius = '5px';
                      this.clickDisplay.textContent = `Click count: 0`;
                      document.body.appendChild(this.clickDisplay);

                      o.addEventListener('click', this.toggle.bind(this));

                      this.button = o;
                      this.time = t.time;
                      this.saveInCookies = t.saveInCookies;
                      this.lightCSS = t.lightCSS;
                      this.darkCSS = t.darkCSS;

                      // Add CSS stylesheets dynamically
                      this.addStyleSheets();
                  }
              }

              var t, n, a;

              return t = e,
                  (n = [
                    {
                      key: "addStyleSheets",
                      value: function () {
                          this.lightLinks = [];
                          this.darkLinks = [];
                  
                          // Add each light theme CSS file
                          if (Array.isArray(this.lightCSS)) {
                              this.lightCSS.forEach(href => {
                                  const link = document.createElement("link");
                                  link.setAttribute("rel", "stylesheet");
                                  link.setAttribute("type", "text/css");
                                  link.setAttribute("href", href);
                                  document.head.appendChild(link);
                                  this.lightLinks.push(link);
                              });
                          }
                  
                          // Add each dark theme CSS file (initially disabled)
                          if (Array.isArray(this.darkCSS)) {
                              this.darkCSS.forEach(href => {
                                  const link = document.createElement("link");
                                  link.setAttribute("rel", "stylesheet");
                                  link.setAttribute("type", "text/css");
                                  link.setAttribute("href", href);
                                  link.disabled = true;
                                  document.head.appendChild(link);
                                  this.darkLinks.push(link);
                              });
                          }
                      }
                  },
                  {
                    key: "toggle",
                    value: function () {
                        const isDark = this.isActivated();
                        this.clickCount += 1;
                        this.clickDisplay.textContent = `Click count: ${this.clickCount}`;
                
                        if (isDark) {
                            // Switch to light mode
                            document.body.classList.remove("css-dark");
                            window.localStorage.setItem("darkmode", "false");
                            this.darkLinks.forEach(link => link.disabled = true);
                            this.lightLinks.forEach(link => link.disabled = false);
                        } else {
                            // Switch to dark mode
                            document.body.classList.add("css-dark");
                            window.localStorage.setItem("darkmode", "true");
                            this.lightLinks.forEach(link => link.disabled = true);
                            this.darkLinks.forEach(link => link.disabled = false);
                        }
                    }
                },
                
                      {
                          key: "isActivated",
                          value: function () {
                              return r ? document.body.classList.contains("css-dark") : null;
                          }
                      }
                  ]) && o(t.prototype, n), a && o(t, a), e;
          }();

          t.default = a;
      }
  ])
});
