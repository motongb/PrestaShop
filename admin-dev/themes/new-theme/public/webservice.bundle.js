window.webservice=function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=351)}({1:function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},10:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=window.$,i=function(){function e(){var n=this;return r(this,e),{extend:function(e){return n.extend(e)}}}return o(e,[{key:"extend",value:function(e){var n=this;e.getContainer().on("click",".js-bulk-action-submit-btn",function(t){n.submit(t,e)})}},{key:"submit",value:function(e,n){var t=a(e.currentTarget),r=t.data("confirm-message");if(!(void 0!==r&&0<r.length)||confirm(r)){var o=a("#"+n.getId()+"_filter_form");o.attr("action",t.data("form-url")),o.attr("method",t.data("form-method")),o.submit()}}}]),e}();n.default=i},12:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=window.$,i=function(){function e(){r(this,e)}return o(e,[{key:"extend",value:function(e){e.getContainer().on("click",".js-submit-row-action",function(e){e.preventDefault();var n=a(e.currentTarget),t=n.data("confirm-message");if(!t.length||confirm(t)){var r=n.data("method"),o=["GET","POST"].includes(r),i=a("<form>",{action:n.data("url"),method:o?r:"POST"}).appendTo("body");o||i.append(a("<input>",{type:"_hidden",name:"_method",value:r})),i.submit()}})}}]),e}();n.default=i},13:function(e,n,t){"use strict";(function(e){function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=e.$,a=function(){function e(n){t(this,e),this.selector=".ps-sortable-column",this.columns=o(n).find(this.selector)}return r(e,[{key:"attach",value:function(){var e=this;this.columns.on("click",function(n){var t=o(n.delegateTarget);e._sortByColumn(t,e._getToggledSortDirection(t))})}},{key:"sortBy",value:function(e,n){var t=this.columns.is('[data-sort-col-name="'+e+'"]');if(!t)throw new Error('Cannot sort by "'+e+'": invalid column');this._sortByColumn(t,n)}},{key:"_sortByColumn",value:function(e,n){window.location=this._getUrl(e.data("sortColName"),"desc"===n?"desc":"asc",e.data("sortPrefix"))}},{key:"_getToggledSortDirection",value:function(e){return"asc"===e.data("sortDirection")?"desc":"asc"}},{key:"_getUrl",value:function(e,n,t){var r=new URL(window.location.href),o=r.searchParams;return t?(o.set(t+"[orderBy]",e),o.set(t+"[sortOrder]",n)):(o.set("orderBy",e),o.set("sortOrder",n)),r.toString()}}]),e}();n.default=a}).call(n,t(1))},14:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0});/**
 * 2007-2019 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var t=e.$,r=function(e,n){t.post(e).then(function(){return window.location.assign(n)})};n.default=r}).call(n,t(1))},17:function(e,n,t){"use strict";(function(e){function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=e.$,a=function(){function e(){t(this,e)}return r(e,[{key:"extend",value:function(e){var n=this;e.getContainer().find("table.table").find(".ps-togglable-row").on("click",function(e){e.preventDefault(),n._toggleValue(o(e.delegateTarget))})}},{key:"_toggleValue",value:function(e){var n=e.data("toggleUrl");this._submitAsForm(n)}},{key:"_submitAsForm",value:function(e){o("<form>",{action:e,method:"POST"}).appendTo("body").submit()}}]),e}();n.default=a}).call(n,t(1))},19:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=window.$,i=function(){function e(n){var t=this;return r(this,e),this.$container=a(n),this.$container.on("click",".js-input-wrapper",function(e){var n=a(e.currentTarget);t._toggleChildTree(n)}),this.$container.on("click",".js-toggle-choice-tree-action",function(e){var n=a(e.currentTarget);t._toggleTree(n)}),{enableAutoCheckChildren:function(){return t.enableAutoCheckChildren()},enableAllInputs:function(){return t.enableAllInputs()},disableAllInputs:function(){return t.disableAllInputs()}}}return o(e,[{key:"enableAutoCheckChildren",value:function(){this.$container.on("change",'input[type="checkbox"]',function(e){var n=a(e.currentTarget);n.closest("li").find('ul input[type="checkbox"]').prop("checked",n.is(":checked"))})}},{key:"enableAllInputs",value:function(){this.$container.find("input").removeAttr("disabled")}},{key:"disableAllInputs",value:function(){this.$container.find("input").attr("disabled","disabled")}},{key:"_toggleChildTree",value:function(e){var n=e.closest("li");if(n.hasClass("expanded"))return void n.removeClass("expanded").addClass("collapsed");n.hasClass("collapsed")&&n.removeClass("collapsed").addClass("expanded")}},{key:"_toggleTree",value:function(e){var n=e.closest(".js-choice-tree-container"),t=e.data("action"),r={addClass:{expand:"expanded",collapse:"collapsed"},removeClass:{expand:"collapsed",collapse:"expanded"},nextAction:{expand:"collapse",collapse:"expand"},text:{expand:"collapsed-text",collapse:"expanded-text"},icon:{expand:"collapsed-icon",collapse:"expanded-icon"}};n.find("li").each(function(e,n){var o=a(n);o.hasClass(r.removeClass[t])&&o.removeClass(r.removeClass[t]).addClass(r.addClass[t])}),e.data("action",r.nextAction[t]),e.find(".material-icons").text(e.data(r.icon[t])),e.find(".js-toggle-text").text(e.data(r.text[t]))}}]),e}();n.default=i},2:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=window.$,i=function(){function e(n){r(this,e),this.id=n,this.$container=a("#"+this.id+"_grid")}return o(e,[{key:"getId",value:function(){return this.id}},{key:"getContainer",value:function(){return this.$container}},{key:"getHeaderContainer",value:function(){return this.$container.closest(".js-grid-panel").find(".js-grid-header")}},{key:"addExtension",value:function(e){e.extend(this)}}]),e}();n.default=i},238:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=function(){function e(){var n=this;return r(this,e),{attachOn:function(e){return n._attachOn(e)}}}return o(e,[{key:"_attachOn",value:function(e){var n=this;document.querySelector(e).addEventListener("click",function(e){var t=e.currentTarget.attributes,r=t.getNamedItem("data-target-input-id").value,o=parseInt(t.getNamedItem("data-generated-value-length").value);document.querySelector("#"+r).value=n._generateValue(o)})}},{key:"_generateValue",value:function(e){for(var n="123456789ABCDEFGHIJKLMNPQRSTUVWXYZ",t="",r=1;r<=e;++r)t+=n.charAt(Math.floor(Math.random()*n.length));return t}}]),e}();n.default=a},272:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});/**
 * 2007-2019 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var o=window.$,a=function e(){return r(this,e),o('input[id^="webservice_key_permissions_all"]').on("change",function(e){var n=o(e.currentTarget),t=n.is(":checked");n.closest("tr").find('input:not(input[id="'+n.attr("id")+'"])').each(function(e,n){o(n).prop("checked",t)})}),{}};n.default=a},351:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=t(2),a=r(o),i=t(4),u=r(i),c=t(5),l=r(c),s=t(9),f=r(s),d=t(8),v=r(d),h=t(10),p=r(h),b=t(6),y=r(b),m=t(12),g=r(m),k=t(17),_=r(k),w=t(19),C=r(w),x=t(238),j=r(x),O=t(59),T=r(O),P=t(272),E=r(P);/**
                   * 2007-2019 PrestaShop SA and Contributors
                   *
                   * NOTICE OF LICENSE
                   *
                   * This source file is subject to the Open Software License (OSL 3.0)
                   * that is bundled with this package in the file LICENSE.txt.
                   * It is also available through the world-wide-web at this URL:
                   * https://opensource.org/licenses/OSL-3.0
                   * If you did not receive a copy of the license and are unable to
                   * obtain it through the world-wide-web, please send an email
                   * to license@prestashop.com so we can send you a copy immediately.
                   *
                   * DISCLAIMER
                   *
                   * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                   * versions in the future. If you wish to customize PrestaShop for your
                   * needs please refer to https://www.prestashop.com for more information.
                   *
                   * @author    PrestaShop SA <contact@prestashop.com>
                   * @copyright 2007-2019 PrestaShop SA and Contributors
                   * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                   * International Registered Trademark & Property of PrestaShop SA
                   */
(0,window.$)(function(){var e=new a.default("webservice_key");e.addExtension(new l.default),e.addExtension(new f.default),e.addExtension(new u.default),e.addExtension(new _.default),e.addExtension(new y.default),e.addExtension(new p.default),e.addExtension(new g.default),e.addExtension(new v.default),new C.default("#webservice_key_shop_association").enableAutoCheckChildren(),new T.default,(new j.default).attachOn(".js-generator-btn"),new E.default})},4:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=t(14),i=function(e){return e&&e.__esModule?e:{default:e}}(a),u=window.$,c=function(){function e(){r(this,e)}return o(e,[{key:"extend",value:function(e){e.getContainer().on("click",".js-reset-search",function(e){(0,i.default)(u(e.currentTarget).data("url"),u(e.currentTarget).data("redirect"))})}}]),e}();n.default=c},5:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=function(){function e(){r(this,e)}return o(e,[{key:"extend",value:function(e){e.getHeaderContainer().on("click",".js-common_refresh_list-grid-action",function(){location.reload()})}}]),e}();n.default=a},59:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=window.$,i=function(){function e(){var n=this;r(this,e),a(document).on("click",".js-multiple-choice-table-select-column",function(e){return n.handleSelectColumn(e)})}return o(e,[{key:"handleSelectColumn",value:function(e){e.preventDefault();var n=a(e.target),t=n.data("column-checked");n.data("column-checked",!t),n.closest("table").find("tbody tr td:nth-child("+n.data("column-num")+") input[type=checkbox]").prop("checked",!t)}}]),e}();n.default=i},6:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=t(13),i=function(e){return e&&e.__esModule?e:{default:e}}(a),u=function(){function e(){r(this,e)}return o(e,[{key:"extend",value:function(e){var n=e.getContainer().find("table.table");new i.default(n).attach()}}]),e}();n.default=u},8:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=window.$,i=function(){function e(){r(this,e)}return o(e,[{key:"extend",value:function(e){this._handleBulkActionCheckboxSelect(e),this._handleBulkActionSelectAllCheckbox(e)}},{key:"_handleBulkActionSelectAllCheckbox",value:function(e){var n=this;e.getContainer().on("change",".js-bulk-action-select-all",function(t){var r=a(t.currentTarget),o=r.is(":checked");o?n._enableBulkActionsBtn(e):n._disableBulkActionsBtn(e),e.getContainer().find(".js-bulk-action-checkbox").prop("checked",o)})}},{key:"_handleBulkActionCheckboxSelect",value:function(e){var n=this;e.getContainer().on("change",".js-bulk-action-checkbox",function(){e.getContainer().find(".js-bulk-action-checkbox:checked").length>0?n._enableBulkActionsBtn(e):n._disableBulkActionsBtn(e)})}},{key:"_enableBulkActionsBtn",value:function(e){e.getContainer().find(".js-bulk-actions-btn").prop("disabled",!1)}},{key:"_disableBulkActionsBtn",value:function(e){e.getContainer().find(".js-bulk-actions-btn").prop("disabled",!0)}}]),e}();n.default=i},9:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=window.$,i=function(){function e(){r(this,e)}return o(e,[{key:"extend",value:function(e){var n=this;e.getHeaderContainer().on("click",".js-common_show_query-grid-action",function(){return n._onShowSqlQueryClick(e)}),e.getHeaderContainer().on("click",".js-common_export_sql_manager-grid-action",function(){return n._onExportSqlManagerClick(e)})}},{key:"_onShowSqlQueryClick",value:function(e){var n=a("#"+e.getId()+"_common_show_query_modal_form");this._fillExportForm(n,e);var t=a("#"+e.getId()+"_grid_common_show_query_modal");t.modal("show"),t.on("click",".btn-sql-submit",function(){return n.submit()})}},{key:"_onExportSqlManagerClick",value:function(e){var n=a("#"+e.getId()+"_common_show_query_modal_form");this._fillExportForm(n,e),n.submit()}},{key:"_fillExportForm",value:function(e,n){var t=n.getContainer().find(".js-grid-table").data("query");e.find('textarea[name="sql"]').val(t),e.find('input[name="name"]').val(this._getNameFromBreadcrumb())}},{key:"_getNameFromBreadcrumb",value:function(){var e=a(".header-toolbar").find(".breadcrumb-item"),n="";return e.each(function(e,t){var r=a(t),o=0<r.find("a").length?r.find("a").text():r.text();0<n.length&&(n=n.concat(" > ")),n=n.concat(o)}),n}}]),e}();n.default=i}});