"use strict";jQuery(document).ready(function(r){rrze_rsvp_admin.dateformat;var o=rrze_rsvp_admin.text_cancel,t=rrze_rsvp_admin.text_cancelled,n=rrze_rsvp_admin.text_confirmed,a=rrze_rsvp_admin.ajaxurl;function i(r,o){var e=o.attr("data-id"),i=o.attr("href");jQuery.ajax({type:"POST",url:a,data:{action:"booking_action",id:e,type:r}}).fail(function(e){console.error("AJAX request failed")}).done(function(e){e=JSON.parse(e),jQuery.ajax({type:"GET",url:i}).fail(function(e){console.error("AJAX request failed")}).done(function(e){"confirm"==r?o.addClass("rrze-rsvp-confirmed").attr("disabled","disabled").html(n):o.attr("disabled","disabled").html(t)})})}r(".rrze-rsvp-confirm").click(function(e){return e.preventDefault(),i("confirm",jQuery(this)),!1}),r(".rrze-rsvp-cancel").click(function(e){return e.preventDefault(),confirm(o)&&i("cancel",jQuery(this)),!1}),r("select#rrze-rsvp-room-bookingmode").after('<a><span class="dashicons dashicons-editor-help info-bookingmode" title="Informationen zum Buchungsmodus anzeigen" aria-hidden="true"></span><span class="screen-reader-text">Informationen zum Buchungsmodus anzeigen</span></a>'),r(".cmb2-id-rrze-rsvp-room-bookingmode .cmb2-metabox-description").hide(),r(".cmb2-id-rrze-rsvp-room-bookingmode").find(".info-bookingmode").click(function(){r(".cmb2-id-rrze-rsvp-room-bookingmode .cmb2-metabox-description").slideToggle()});var e=r("body.wp-admin.post-type-room #rrze-rsvp-room-timeslots_repeat div.cmb-repeatable-grouping");r(e).each(function(e){1==r(this).find("input[id$='rrze-rsvp-room-starttime']").prop("disabled")&&r(this).find("button.cmb-remove-group-row").prop({disabled:!0})}),r("body.wp-admin.post-type-room form, body.wp-admin.post-type-booking form").submit(function(e){r("#postbox-container-2 :disabled").each(function(e){r(this).removeAttr("disabled")})});var s=jQuery("div#rrze-rsvp-booking-details"),d=s.find("select#rrze-rsvp-booking-seat"),c=s.find("input#rrze-rsvp-booking-start_date"),m=s.find("input#rrze-rsvp-booking-start_time"),l=s.find("input#rrze-rsvp-booking-end_date"),p=s.find("input#rrze-rsvp-booking-end_time");m.attr("disabled","disabled"),d.change(function(){c.val(""),m.val(""),l.val(""),p.val(""),jQuery("div.select_timeslot_container").remove()}),c.change(function(){l.val(c.val()),m.val(""),p.val(""),""==d.val()||""==c.val()?(alert(rrze_rsvp_admin.alert_no_seat_date),c.val(""),l.val("")):(jQuery("div.select_timeslot_container").remove(),jQuery.post(a,{action:"ShowTimeslots",seat:d.val(),date:c.val()},function(e){0!=e&&jQuery("input#rrze-rsvp-booking-start_time").after(e)}))}),r("div.cmb2-id-rrze-rsvp-booking-start").on("change","select.select_timeslot",function(){var e=jQuery(this).val(),r=jQuery(this).find(":selected").data("end");m.val(e),p.val(r)});var v=r("select#rrze-rsvp-room-bookingmode"),u=v.val(),b=r("div.cmb2-id-rrze-rsvp-room-instant-check-in"),f=r("input#rrze-rsvp-room-auto-confirmation"),h=f.is(":checked");function _(e){r("div#cmb2-metabox-rrze_rsvp_general-meta div.cmb-row.hide-"+e).slideUp(),r("div#cmb2-metabox-rrze_rsvp_general-meta div.cmb-row").not(".hide-"+e).slideDown(),r("div#cmb2-metabox-rrze_rsvp_general-meta div.cmb-row.hide-"+e+" input").prop("checked",!1),"check-only"===e&&r("input#rrze-rsvp-room-instant-check-in").prop("checked",!0)}function z(e){!0===e?b.slideDown():(b.slideUp(),r("#rrze-rsvp-room-instant-check-in").prop("checked",!1))}_(u),z(h),v.on("change",function(){_(r("option:selected",this).val())}),f.click(function(){z(r(this).is(":checked"))})});