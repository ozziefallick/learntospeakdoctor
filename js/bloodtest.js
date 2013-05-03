        function showOverlay(source) { // NOTE TO WHOMEVER: CHANGE TO ENCOMPASS RESOURCE OVERLAY IF NEED BE
            if (source == 'done-button') {
                $("#exit-overlay").fadeIn(500); // shows exit overlay

            } else {
                // resource btn
                $("#resource-overlay").fadeIn(500); // shows resource overlay
            }
        	
        }
		
		function flashBoxes(b, n) {
			for(var i = 0; i <= n; i++) {
				setTimeout("boxColor('" + b + "', '#70B8FF')", i * 400);
				setTimeout("boxColor('" + b + "', 'white')", i * 400 + 200);
			}
		}
		
		function boxColor(b, c) {
			$(b).each(function () {
				this.style.backgroundColor = c;
			});
		};
		
        function changeSuggestions(level) {
        	if (level == 'basic') {
				<!-- change to beginner-->
				document.getElementById("chol-def").innerHTML = "It is ideal to have cholesterol in the lower (green) range.<br /><br />" +
				"It is beneficial to have low HDL (\"good\" cholesterol) level.<br /><br />" +
				"High LDL (\"bad\" cholesterol) levels can be a potential health hazard.";
				document.getElementById("bc-def").innerHTML = "Red blood cells help deliver oxygen to the body. It is ideal to have a count within the green range.<br /><br />" +
				"White blood cells protect the body against infection. It is ideal to have a count within the green range.";
        	} else if (level =='intermediate') {
        	    <!-- change to intermediate -->
				document.getElementById("chol-def").innerHTML = "Too much cholesterol in the blood can collect on artery walls to make plaques and restrict blood flow. HDL (\"good\" cholesterol) helps clear plaques, while LDL (\"bad\" cholesterol) contributes to them. High triglyceride levels lead to increased LDL and decreased HDL.";
				document.getElementById("bc-def").innerHTML = "Red blood cells deliver oxygen to the body, while white blood cells protect the body against infection. Low red blood cell counts indicate anemia, while high white blood cell counts indicate an ongoing infection.";
        	} else if (level == 'expert') {
        		<!-- change to expert -->
				document.getElementById("chol-def").innerHTML = "Clogged arteries result from a buildup of a substance called plaque along the arteries' inner walls. The arterial plaque can reduce blood flow, and can potentially block it altogether. Too much cholesterol in the blood can collect to form arma virumque cano, Troiae qui primus ab oris...";
				document.getElementById("bc-def").innerHTML = "Red blood cells deliver oxygen to the body, while white blood cells protect the body against infection. Low red blood cell counts indicate anemia, while high white blood cell counts indicate an ongoing infection.";
        	}

			flashBoxes('.definition-box', 3);
        }
        function clearAllChecks() {
            $('input[type=checkbox]').each(function () {
                this.checked = false;
            });

        }
        function applyBehaviors() {
            // regardless of selection, for our purposes will show same behavior effects
            // change analyses
			closeOptions();
			var risk = document.getElementById('risk');
			risk.innerHTML = "12% <span style=\"font-size: 14px;\">(-17%)</span>";
			risk.style.color = "green";
			document.getElementById('chol-graphs').src = "img/cholesterol_applied.png";
        }
		
		function openOptions() {
			document.getElementById('behav-nothing').style.display = 'none';
			document.getElementById('behav-options').style.display = 'inline';
			document.getElementById('behav-selected').style.display = 'none';
			flashBoxes('.suggestion-box', 3);
		}
		
		function closeOptions() {
			document.getElementById('behav-selected').style.display = 'inline';
			document.getElementById('behav-nothing').style.display = 'none';
			document.getElementById('behav-options').style.display = 'none';
		}
		
		function currentBehavior(n) {
			document.getElementById('row' + n).style.display = 'none';
		}