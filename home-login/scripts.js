function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src',profile.getImageUrl());
    $(".data").css("display","block");
    $(".g-signin2").css("display","block");
    $(".kucho").css("display","none");

  
  }
function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          alert("signed out chacha!");
          $(".g-signin2").css("display","block");
          $(".data").css("display","none");
          $(".kucho").css("display","none");
        });
      }
  








