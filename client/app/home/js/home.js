var Rentmngt;Rentmngt=angular.module("RentmngtApp",["templates","ngMessages"]),Rentmngt.controller("MainCtrl",["$scope","$http","$window",function(n,t,e){}]);
Rentmngt.controller("PropertyRegistration",["$scope","$http","$window","CreateAcctService",function(t,e,n,i){t.Registration={},t.Registration="",t.submitted=!1,t.noFullyConfigured=!1,t.showSpinner=!1,t.disableComponents=!1,t.interacted=function(e){return t.submitted||e.$dirty},t.submit=function(){t.submitted=!0},t.Userlogin=function(){t.showSpinner=!0,i.userLogin(t.user).success(function(e){t.invalidcredential=!1,n.sessionStorage.token=e.token,n.location.href=e.homepage}).error(function(e){t.invalidcredential=!0,t.showSpinner=!1,delete n.sessionStorage.token})},t.Save=function(){"undefined"==typeof t.Registration.Registrationtype?alert("Kindly choose a Registration Type"):(t.Registration.AccessStatus=1,t.Registration.datecreated=(new Date).toISOString(),i.CreatePropertyOwner(t.Registration).success(function(e){t.SuccessStatus=!0,t.ErrorStatus=!1,t.disableComponents=!0}).error(function(e){t.ErrorStatus=!0,t.SuccessStatus=!1,t.disableComponents=!0}))}}]);
Rentmngt.service("CreateAcctService",["$http","$q",function(e,r){var t="/web";this.checkusername=function(n){var c=r.defer();return e.get(t+"/user/"+n).success(function(e){c.reject(e)}).error(function(e){c.resolve(e)}),c.promise},this.CreatePropertyOwner=function(r){return e.post("/web/propertyAccount",r)},this.userLogin=function(r){return e.post("web/Login",r)}}]);
Rentmngt.service("GoogleMapApi",["$window","$q",function(e,i){function n(){var e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=places&callback=initMap",document.body.appendChild(e)}var t=i.defer();return e.initMap=function(){t.resolve()},n(),t.promise}]);
Rentmngt.directive("checkUsername",["CreateAcctService",function(e){return{require:"ngModel",link:function(n,r,c,t){t.$asyncValidators.usernameAvailable=function(n){return e.checkusername(n)}}}}]);
Rentmngt.directive("googleautocomplete",["GoogleMapApi",function(e){var o=function(o,t,n,i){function c(){if(void 0===a){var e={types:[],componentRestrictions:{}};p=new google.maps.places.Autocomplete(t[0],e),google.maps.event.addListener(p,"place_changed",l)}}function l(){p.getPlace().geometry?o.$apply(function(){i.$setViewValue(t.val())}):document.getElementById("autocomplete").placeholder="Enter a location"}var a,p;e.then(function(){c()},function(){console.log("promise Rejected map not initialised")})};return{require:"ngModel",link:o}}]);
Rentmngt.directive("matchValidator",[function(){return{require:"ngModel",link:function(t,n,e,i){i.$parsers.push(function(n){return i.$setValidity("match",n==t.$eval(e.matchValidator)),n})}}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJQcm9wZXJ0UmVnaXN0cmF0aW9uLmpzIiwiQ3JlYXRlQWNjdFNlcnZpY2UuanMiLCJnb29nbGVtYXAuanMiLCJjaGVja1VzZXJuYW1lLmpzIiwiZ29vZ2xlYXV0b2NvbXBsZXRlLmpzIiwibWF0Y2hWYWxpZGF0b3IuanMiXSwibmFtZXMiOlsiUmVudG1uZ3QiLCJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRodHRwIiwiJHdpbmRvdyIsIkNyZWF0ZUFjY3RTZXJ2aWNlIiwiUmVnaXN0cmF0aW9uIiwic3VibWl0dGVkIiwibm9GdWxseUNvbmZpZ3VyZWQiLCJzaG93U3Bpbm5lciIsImRpc2FibGVDb21wb25lbnRzIiwiaW50ZXJhY3RlZCIsImZpZWxkIiwiJGRpcnR5Iiwic3VibWl0IiwiVXNlcmxvZ2luIiwidXNlckxvZ2luIiwidXNlciIsInN1Y2Nlc3MiLCJkYXRhIiwiaW52YWxpZGNyZWRlbnRpYWwiLCJzZXNzaW9uU3RvcmFnZSIsInRva2VuIiwibG9jYXRpb24iLCJocmVmIiwiaG9tZXBhZ2UiLCJlcnJvciIsIlNhdmUiLCJSZWdpc3RyYXRpb250eXBlIiwiYWxlcnQiLCJBY2Nlc3NTdGF0dXMiLCJkYXRlY3JlYXRlZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIkNyZWF0ZVByb3BlcnR5T3duZXIiLCJTdWNjZXNzU3RhdHVzIiwiRXJyb3JTdGF0dXMiLCJzZXJ2aWNlIiwiJHEiLCJ1cmwiLCJ0aGlzIiwiY2hlY2t1c2VybmFtZSIsInVzZXJuYW1lIiwiZGVmZXJyZWQiLCJkZWZlciIsImdldCIsInJlamVjdCIsInJlc29sdmUiLCJwcm9taXNlIiwicG9zdCIsImxvYWRTY3JpcHQiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpbml0TWFwIiwiZGlyZWN0aXZlIiwicmVxdWlyZSIsImxpbmsiLCJlbGVtZW50IiwiYXR0cnMiLCJuZ01vZGVsIiwiJGFzeW5jVmFsaWRhdG9ycyIsInVzZXJuYW1lQXZhaWxhYmxlIiwiR29vZ2xlTWFwQXBpIiwic2NvcGUiLCJtb2RlbCIsIm1hcCIsIm9wdGlvbnMiLCJ0eXBlcyIsImNvbXBvbmVudFJlc3RyaWN0aW9ucyIsImF1dG9jb21wbGV0ZSIsImdvb2dsZSIsIm1hcHMiLCJwbGFjZXMiLCJBdXRvY29tcGxldGUiLCJldmVudCIsImFkZExpc3RlbmVyIiwib25QbGFjZUNoYW5nZWQiLCJnZXRQbGFjZSIsImdlb21ldHJ5IiwiJGFwcGx5IiwiJHNldFZpZXdWYWx1ZSIsInZhbCIsImdldEVsZW1lbnRCeUlkIiwicGxhY2Vob2xkZXIiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsIiRwYXJzZXJzIiwicHVzaCIsInZhbHVlIiwiJHNldFZhbGlkaXR5IiwiJGV2YWwiLCJtYXRjaFZhbGlkYXRvciJdLCJtYXBwaW5ncyI6IkFBQUEsR0FBSUEsU0FFSkEsVUFBVUMsUUFBUUMsT0FBTyxlQUFnQixZQUFZLGVBRXJERixTQUFTRyxXQUFXLFlBQWEsU0FBUyxRQUFRLFVBQVcsU0FBU0MsRUFBT0MsRUFBTUM7QUNKbkZOLFNBQVNHLFdBQVcsd0JBQXlCLFNBQVMsUUFBUSxVQUFVLG9CQUFxQixTQUFTQyxFQUFPQyxFQUFNQyxFQUFRQyxHQUVySEgsRUFBT0ksZ0JBQ1pKLEVBQU9JLGFBQWEsR0FDcEJKLEVBQU9LLFdBQVksRUFDbEJMLEVBQU9NLG1CQUFrQixFQUN6Qk4sRUFBT08sYUFBWSxFQUNuQlAsRUFBT1EsbUJBQWtCLEVBQ3hCUixFQUFPUyxXQUFhLFNBQVNDLEdBQzFCLE1BQU9WLEdBQU9LLFdBQWFLLEVBQU1DLFFBR25DWCxFQUFPWSxPQUFTLFdBQ2RaLEVBQU9LLFdBQVksR0FJbEJMLEVBQU9hLFVBQVUsV0FDVGIsRUFBT08sYUFBWSxFQUNqQkosRUFBa0JXLFVBQVVkLEVBQU9lLE1BQzNDQyxRQUFRLFNBQVNDLEdBQ2JqQixFQUFPa0IsbUJBQWtCLEVBQzdCaEIsRUFBUWlCLGVBQWVDLE1BQVFILEVB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LCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVudG1uZ3Q7XHJcblxyXG5SZW50bW5ndD0gYW5ndWxhci5tb2R1bGUoJ1JlbnRtbmd0QXBwJywgWyd0ZW1wbGF0ZXMnLCduZ01lc3NhZ2VzJ10gKTsgXHJcblxyXG5SZW50bW5ndC5jb250cm9sbGVyKCdNYWluQ3RybCcsIFsnJHNjb3BlJywnJGh0dHAnLCckd2luZG93JywgZnVuY3Rpb24oJHNjb3BlLCRodHRwLCR3aW5kb3cpe1xyXG5cclxuXHJcbiAgICBcclxuXHR9XSk7XHJcbiIsIlJlbnRtbmd0LmNvbnRyb2xsZXIoJ1Byb3BlcnR5UmVnaXN0cmF0aW9uJywgWyckc2NvcGUnLCckaHR0cCcsJyR3aW5kb3cnLCdDcmVhdGVBY2N0U2VydmljZScsIGZ1bmN0aW9uKCRzY29wZSwkaHR0cCwkd2luZG93LENyZWF0ZUFjY3RTZXJ2aWNlKXtcclxuXHJcbiAgICAgICRzY29wZS5SZWdpc3RyYXRpb249e307XHJcbiAkc2NvcGUuUmVnaXN0cmF0aW9uPVwiXCI7XHJcbiAkc2NvcGUuc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgJHNjb3BlLm5vRnVsbHlDb25maWd1cmVkPWZhbHNlO1xyXG4gICRzY29wZS5zaG93U3Bpbm5lcj1mYWxzZTtcclxuICAkc2NvcGUuZGlzYWJsZUNvbXBvbmVudHM9ZmFsc2U7XHJcbiAgICRzY29wZS5pbnRlcmFjdGVkID0gZnVuY3Rpb24oZmllbGQpIHtcclxuICAgICAgcmV0dXJuICRzY29wZS5zdWJtaXR0ZWQgfHwgZmllbGQuJGRpcnR5O1xyXG4gICAgfTtcclxuXHQgICAgXHJcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICRzY29wZS5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgICAgJHNjb3BlLlVzZXJsb2dpbj1mdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAkc2NvcGUuc2hvd1NwaW5uZXI9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICBDcmVhdGVBY2N0U2VydmljZS51c2VyTG9naW4oJHNjb3BlLnVzZXIpXHJcblx0XHRcdFx0IFx0XHQgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAkc2NvcGUuaW52YWxpZGNyZWRlbnRpYWw9ZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4gPSBkYXRhLnRva2VuO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICR3aW5kb3cubG9jYXRpb24uaHJlZj1kYXRhLmhvbWVwYWdlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBcclxuXHRcdFx0XHRcdFx0XHQgfSkgXHJcblx0XHRcdFx0XHRcdCAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdCAgICRzY29wZS5pbnZhbGlkY3JlZGVudGlhbD10cnVlO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAkc2NvcGUuc2hvd1NwaW5uZXI9ZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0ICAgIGRlbGV0ZSAkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuO1xyXG5cdFx0XHRcdFx0XHRcdCB9KTtcdFxyXG4gICAgICB9O1xyXG5cclxuICAgICBcclxuXHRcdCAkc2NvcGUuU2F2ZT1mdW5jdGlvbigpe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIGlmICh0eXBlb2YgJHNjb3BlLlJlZ2lzdHJhdGlvbi5SZWdpc3RyYXRpb250eXBlID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHR7ICAgYWxlcnQoXCJLaW5kbHkgY2hvb3NlIGEgUmVnaXN0cmF0aW9uIFR5cGVcIik7IH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAkc2NvcGUuUmVnaXN0cmF0aW9uLkFjY2Vzc1N0YXR1cz0xO1xyXG4gICAgICAgICAgICAgICRzY29wZS5SZWdpc3RyYXRpb24uZGF0ZWNyZWF0ZWQ9bmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xyXG5cdFx0XHQgICBDcmVhdGVBY2N0U2VydmljZS5DcmVhdGVQcm9wZXJ0eU93bmVyKCRzY29wZS5SZWdpc3RyYXRpb24pXHJcblx0XHRcdFx0XHRcdCAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5TdWNjZXNzU3RhdHVzPXRydWU7IFxyXG5cdFx0XHRcdFx0XHRcdFx0ICRzY29wZS5FcnJvclN0YXR1cz1mYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdCAkc2NvcGUuZGlzYWJsZUNvbXBvbmVudHM9dHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHQgfSkgXHJcblx0XHRcdFx0XHRcdCAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICRzY29wZS5FcnJvclN0YXR1cz10cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICRzY29wZS5TdWNjZXNzU3RhdHVzPWZhbHNlOyBcclxuXHRcdFx0XHRcdFx0XHRcdCAkc2NvcGUuZGlzYWJsZUNvbXBvbmVudHM9dHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdCB9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0IFxyXG5cdFx0IH1cclxuXHJcbiAgICBcclxuXHR9XSk7IiwiICAgUmVudG1uZ3Quc2VydmljZSgnQ3JlYXRlQWNjdFNlcnZpY2UnLCBbJyRodHRwJywnJHEnLCBmdW5jdGlvbiAoICRodHRwLCRxKSB7XHJcbiAgICAgdmFyIHRyYW5zYWN0aW9uPXt9O1xyXG4gICAgdmFyIHVybD0nL3dlYic7XHJcbiAgICAgIHRoaXMuY2hlY2t1c2VybmFtZSA9IGZ1bmN0aW9uICh1c2VybmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG4gICAgICAgICAkaHR0cC5nZXQodXJsICsgJy91c2VyLycrICB1c2VybmFtZSlcclxuICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkgeyBcclxuICAgICAgICAgIGRlZmVycmVkLnJlamVjdChkYXRhKTtcclxuICAgICAgICB9KS5lcnJvcihmdW5jdGlvbihkYXRhKSB7ICAgIFxyXG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuICAgICAgIH0pO1xyXG4gICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfTtcclxuXHJcbiAgICAgIHRoaXMuQ3JlYXRlUHJvcGVydHlPd25lciA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuICAkaHR0cC5wb3N0KCcvd2ViL3Byb3BlcnR5QWNjb3VudCcsIGRhdGEpO1xyXG4gICAgfTtcclxuICAgICAgdGhpcy51c2VyTG9naW4gPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgICAgIHJldHVybiAgJGh0dHAucG9zdCgnd2ViL0xvZ2luJyx1c2VyKTtcclxuXHJcbiAgICAgIFxyXG5cclxuICAgIH07XHJcbiAgICB9XSk7IiwiICAgUmVudG1uZ3Quc2VydmljZSgnR29vZ2xlTWFwQXBpJywgWyckd2luZG93JywgJyRxJywgZnVuY3Rpb24gKCAkd2luZG93LCAkcSApIHtcclxuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRTY3JpcHQoKSB7ICBcclxuXHRcdFxyXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP3Y9My5leHAmc2lnbmVkX2luPXRydWUmbGlicmFyaWVzPXBsYWNlcyZjYWxsYmFjaz1pbml0TWFwJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2NyaXB0IGxvYWRlZCBjYWxsYmFjaywgc2VuZCByZXNvbHZlXHJcbiAgICAgICAgJHdpbmRvdy5pbml0TWFwID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZFNjcmlwdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH1dKTsiLCJSZW50bW5ndC5kaXJlY3RpdmUoJ2NoZWNrVXNlcm5hbWUnLCBbJ0NyZWF0ZUFjY3RTZXJ2aWNlJywgZnVuY3Rpb24gKCBDcmVhdGVBY2N0U2VydmljZSApIHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgcmV0dXJuIHtcclxuXHRcdFx0XHQgICAgcmVxdWlyZSA6ICduZ01vZGVsJyxcclxuXHRcdFx0XHQgICAgbGluayA6IGZ1bmN0aW9uKCRzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTW9kZWwpIHtcclxuXHRcdFx0XHQgICAgICBuZ01vZGVsLiRhc3luY1ZhbGlkYXRvcnMudXNlcm5hbWVBdmFpbGFibGUgPSBmdW5jdGlvbih1c2VybmFtZSkge1xyXG5cdFx0XHRcdCAgICAgICAgcmV0dXJuIENyZWF0ZUFjY3RTZXJ2aWNlLmNoZWNrdXNlcm5hbWUodXNlcm5hbWUpO1xyXG5cdFx0XHRcdCAgICAgIH07XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgIH1cclxuXHJcblxyXG5cclxuXHRcdFx0fV0pOyIsIlxyXG5cclxuIFx0IFJlbnRtbmd0LmRpcmVjdGl2ZSgnZ29vZ2xlYXV0b2NvbXBsZXRlJywgWydHb29nbGVNYXBBcGknLCBmdW5jdGlvbiAoIEdvb2dsZU1hcEFwaSApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgICB2YXIgbGluayA9IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycyxtb2RlbCkge1xyXG5cdFx0XHRcdCB2YXIgbWFwLGF1dG9jb21wbGV0ZTtcclxuICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXAgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzIDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9ICBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShlbGVtZW50WzBdLG9wdGlvbnMpO1xyXG5cdFx0XHRcdFx0XHQgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoYXV0b2NvbXBsZXRlLCAncGxhY2VfY2hhbmdlZCcsIG9uUGxhY2VDaGFuZ2VkKTsgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0XHQgICAgICAgIFx0ICAgIH1cclxuXHRcdFx0XHQgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgR29vZ2xlTWFwQXBpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5pdE1hcCgpO1xyXG5cdFx0XHRcdFx0IFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9taXNlIFJlamVjdGVkIG1hcCBub3QgaW5pdGlhbGlzZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24gb25QbGFjZUNoYW5nZWQoKXtcclxuXHRcdFx0XHRcdFx0XHQgIGlmIChhdXRvY29tcGxldGUuZ2V0UGxhY2UoKS5nZW9tZXRyeSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC4kc2V0Vmlld1ZhbHVlKGVsZW1lbnQudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b2NvbXBsZXRlJykucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBsb2NhdGlvbic7XHJcblx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHQgICAgICB9XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICBcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdFx0XHRyZXF1aXJlIDogJ25nTW9kZWwnLFxyXG5cdFx0XHRcdFx0XHRcdGxpbms6IGxpbmtcclxuXHRcdFx0XHRcdFx0fTtcclxuXHJcblxyXG5cclxuXHRcdFx0fV0pOyIsIiBcdCBSZW50bW5ndC5kaXJlY3RpdmUoJ21hdGNoVmFsaWRhdG9yJywgW2Z1bmN0aW9uICgpIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgICByZXR1cm4ge1xyXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxyXG5cdFx0XHRcdFx0ICAgICAgbGluayA6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbmdNb2RlbCkge1xyXG5cdFx0XHRcdFx0ICAgICAgICBuZ01vZGVsLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdFx0XHRcdCAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnbWF0Y2gnLCB2YWx1ZSA9PSBzY29wZS4kZXZhbChhdHRycy5tYXRjaFZhbGlkYXRvcikpO1xyXG5cdFx0XHRcdFx0ICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuXHRcdFx0XHRcdCAgICAgICAgfSk7XHJcblx0XHRcdFx0XHQgICAgICB9XHJcblx0XHRcdFx0XHQgICAgfVxyXG5cclxuXHJcblx0XHRcdH1dKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
