<script>
		function openCity(evt, cityName) {
		  var i, tabcontent, tablinks, dem;
		  document.getElementById("flight").classList.add('tabcontent');

		  document.getElementById("flight").classList.remove('demo');

		  tabcontent = document.getElementsByClassName("tabcontent");
		  for (i = 0; i < tabcontent.length; i++) {
		    tabcontent[i].style.display = "none";
		  }
		  tablinks = document.getElementsByClassName("tablinks");
		  for (i = 0; i < tablinks.length; i++) {
		    tablinks[i].className = tablinks[i].className.replace(" active", "");
		  }
		  document.getElementById(cityName).style.display = "block";
		  evt.currentTarget.className += " active";
		}
	</script>
