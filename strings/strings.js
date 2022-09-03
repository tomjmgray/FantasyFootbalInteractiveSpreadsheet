

let str2 = `
&1 ~Josh Allen ~BUF 
&2 ~Justin Herbert ~LAC 
&3 ~Patrick Mahomes II ~KC 
&4 ~Lamar Jackson ~BAL 
&5 ~Kyler Murray ~ARI 
&6 ~Jalen Hurts ~PHI 
&7 ~Joe Burrow ~CIN 
&8 ~Tom Brady ~TB 
&9 ~Russell Wilson ~DEN 
&10 ~Dak Prescott ~DAL 
&11 ~Trey Lance ~SF 
&12 ~Matthew Stafford ~LAR 
&13 ~Aaron Rodgers ~GB 
&14 ~Kirk Cousins ~MIN 
&15 ~Derek Carr ~LV 
&16 ~Tua Tagovailoa ~MIA 
&17 ~Justin Fields ~CHI 
&18 ~Trevor Lawrence ~JAC 
&19 ~Jameis Winston ~NO 
&20 ~Matt Ryan ~IND 
&21 ~Ryan Tannehill ~TEN 
&22 ~Daniel Jones ~NYG 
&23 ~Mac Jones ~NE 
&24 ~Jared Goff ~DET 
&25 ~Carson Wentz ~WAS 
&26 ~Baker Mayfield ~CAR 
&27 ~Zach Wilson ~NYJ 
&28 ~Davis Mills ~HOU 
&29 ~Marcus Mariota ~ATL 
&30 ~Mitch Trubisky ~PIT 
&31 ~Deshaun Watson ~CLE 
&32 ~Kenny Pickett ~PIT 
&33 ~Drew Lock ~SEA 
&34 ~Jimmy Garoppolo ~SF 
&35 ~Jacoby Brissett ~CLE 
&36 ~Geno Smith ~SEA 
&37 ~Desmond Ridder ~ATL 
&38 ~Sam Darnold ~CAR 
&39 ~Malik Willis ~TEN 
&40 ~Teddy Bridgewater ~MIA 
$
&1 ~Christian McCaffrey ~CAR 
&2 ~Jonathan Taylor ~IND 
&3 ~Austin Ekeler ~LAC 
&4 ~Dalvin Cook ~MIN 
&5 ~Derrick Henry ~TEN 
&6 ~Najee Harris ~PIT 
&7 ~D'Andre Swift ~DET 
&8 ~Joe Mixon ~CIN 
&9 ~Alvin Kamara ~NO 
&10 ~Saquon Barkley ~NYG 
&11 ~Aaron Jones ~GB 
&12 ~Leonard Fournette ~TB 
&13 ~Javonte Williams ~DEN 
&14 ~Nick Chubb ~CLE 
&15 ~James Conner ~ARI 
&16 ~Ezekiel Elliott ~DAL 
&17 ~Travis Etienne Jr ~JAC 
&18 ~David Montgomery ~CHI 
&19 ~Breece Hall ~NYJ 
&20 ~Cam Akers ~LAR 
&21 ~AJ Dillon ~GB 
&22 ~Elijah Mitchell ~SF 
&23 ~Josh Jacobs ~LV 
&24 ~J.K. Dobbins ~BAL 
&25 ~Chase Edmonds ~MIA 
&26 ~Antonio Gibson ~WAS 
&27 ~Clyde Edwards-Helaire ~KC 
&28 ~Kareem Hunt ~CLE 
&29 ~Tony Pollard ~DAL 
&30 ~Dameon Pierce ~HOU 
&31 ~Rashaad Penny ~SEA 
&32 ~Miles Sanders ~PHI 
&33 ~Damien Harris ~NE 
&34 ~Rhamondre Stevenson ~NE 
&35 ~Cordarrelle Patterson ~ATL 
&36 ~Devin Singletary ~BUF 
&37 ~Melvin Gordon III ~DEN 
&38 ~Michael Carter ~NYJ 
&39 ~James Cook ~BUF 
&40 ~Nyheim Hines ~IND 
&41 ~Ken Walker III ~SEA 
&42 ~Darrell Henderson Jr. ~LAR 
&43 ~Alexander Mattison ~MIN 
&44 ~James Robinson ~JAC 
&45 ~J.D. McKissic ~WAS 
&46 ~Kenneth Gainwell ~PHI 
&47 ~Khalil Herbert ~CHI 
&48 ~Jamaal Williams ~DET 
&49 ~Raheem Mostert ~MIA 
&50 ~Rachaad White ~TB 
&51 ~Tyler Allgeier ~ATL 
&52 ~Isaiah Spiller ~LAC 
&53 ~Zamir White ~LV 
&54 ~Mark Ingram II ~NO 
&55 ~Darrel Williams ~ARI 
&56 ~Gus Edwards ~BAL 
&57 ~Brian Robinson Jr. ~WAS 
&58 ~Jerick McKinnon ~KC 
&59 ~Ronald Jones II ~KC 
&60 ~Samaje Perine ~CIN 
&61 ~Jeff Wilson Jr. ~SF 
&62 ~Boston Scott ~PHI 
&63 ~D'Onta Foreman ~CAR 
&64 ~D'Ernest Johnson ~CLE 
&65 ~Chuba Hubbard ~CAR 
&66 ~Isiah Pacheco ~KC 
&67 ~Tyrion Davis-Price ~SF 
&68 ~Damien Williams ~ATL 
&69 ~Mike Davis ~BAL 
&70 ~Rex Burkhead ~HOU 
&71 ~Zack Moss ~BUF 
&72 ~Sony Michel ~LAC 
&73 ~Eno Benjamin ~ARI 
&74 ~Kenyan Drake ~BAL 
&75 ~Myles Gaskin ~MIA 
&76 ~Matt Breida ~NYG 
&77 ~Trey Sermon ~FA 
&78 ~Joshua Kelley ~LAC 
&79 ~Chris Evans ~CIN 
&80 ~Marlon Mack ~HOU 
&81 ~Hassan Haskins ~TEN 
&82 ~Ke'Shawn Vaughn ~TB 
&83 ~Kyren Williams ~LAR 
&84 ~Giovani Bernard ~TB 
&85 ~Ty Johnson ~NYJ 
&86 ~Pierre Strong Jr. ~NE 
&87 ~Ameer Abdullah ~LV 
&88 ~Dontrell Hilliard ~TEN 
&89 ~Salvon Ahmed ~MIA 
&90 ~Jerome Ford ~CLE 
&91 ~Darrynton Evans ~CHI 
&92 ~Phillip Lindsay ~FA 
&93 ~Snoop Conner ~JAC 
&94 ~Justin Jackson ~DET 
&95 ~Duke Johnson Jr. ~BUF 
&96 ~Jaylen Warren ~PIT 
&97 ~Tevin Coleman ~FA 
&98 ~Jaret Patterson ~WAS 
&99 ~Ty Montgomery ~NE 
&100 ~DeeJay Dallas ~SEA 
$
&1 ~Justin Jefferson ~MIN 
&2 ~Cooper Kupp ~LAR 
&3 ~Ja'Marr Chase ~CIN 
&4 ~Stefon Diggs ~BUF 
&5 ~Davante Adams ~LV 
&6 ~CeeDee Lamb ~DAL 
&7 ~Tyreek Hill ~MIA 
&8 ~Mike Evans ~TB 
&9 ~Keenan Allen ~LAC 
&10 ~Michael Pittman Jr. ~IND 
&11 ~Deebo Samuel ~SF 
&12 ~A.J. Brown ~PHI 
&13 ~Tee Higgins ~CIN 
&14 ~DJ Moore ~CAR 
&15 ~Diontae Johnson ~PIT 
&16 ~Jaylen Waddle ~MIA 
&17 ~Courtland Sutton ~DEN 
&18 ~Mike Williams ~LAC 
&19 ~Terry McLaurin ~WAS 
&20 ~Brandin Cooks ~HOU 
&21 ~Allen Robinson II ~LAR 
&22 ~DK Metcalf ~SEA 
&23 ~Marquise Brown ~ARI 
&24 ~Darnell Mooney ~CHI 
&25 ~Michael Thomas ~NO 
&26 ~Amon-Ra St. Brown ~DET 
&27 ~Rashod Bateman ~BAL 
&28 ~Jerry Jeudy ~DEN 
&29 ~Chris Godwin ~TB 
&30 ~JuJu Smith-Schuster ~KC 
&31 ~Amari Cooper ~CLE 
&32 ~Gabriel Davis ~BUF 
&33 ~Elijah Moore ~NYJ 
&34 ~Adam Thielen ~MIN 
&35 ~Hunter Renfrow ~LV 
&36 ~Brandon Aiyuk ~SF 
&37 ~DeVonta Smith ~PHI 
&38 ~Christian Kirk ~JAC 
&39 ~Drake London ~ATL 
&40 ~Allen Lazard ~GB 
&41 ~Tyler Lockett ~SEA 
&42 ~Robert Woods ~TEN 
&43 ~DeAndre Hopkins ~ARI 
&44 ~Kadarius Toney ~NYG 
&45 ~Chris Olave ~NO 
&46 ~Chase Claypool ~PIT 
&47 ~Tyler Boyd ~CIN 
&48 ~Jakobi Meyers ~NE 
&49 ~Treylon Burks ~TEN 
&50 ~Garrett Wilson ~NYJ 
&51 ~Russell Gage ~TB 
&52 ~George Pickens ~PIT 
&53 ~Skyy Moore ~KC 
&54 ~Rondale Moore ~ARI 
&55 ~Marquez Valdes-Scantling ~KC 
&56 ~Michael Gallup ~DAL 
&57 ~DeVante Parker ~NE 
&58 ~Jarvis Landry ~NO 
&59 ~Jahan Dotson ~WAS 
&60 ~DJ Chark Jr. ~DET 
&61 ~Julio Jones ~TB 
&62 ~Nico Collins ~HOU 
&63 ~Kenny Golladay ~NYG 
&64 ~Joshua Palmer ~LAC 
&65 ~Robbie Anderson ~CAR 
&66 ~K.J. Osborn ~MIN 
&67 ~Jalen Tolbert ~DAL 
&68 ~Mecole Hardman ~KC 
&69 ~Corey Davis ~NYJ 
&70 ~Marvin Jones Jr. ~JAC 
&71 ~Van Jefferson ~LAR 
&72 ~Christian Watson ~GB 
&73 ~Wan'Dale Robinson ~NYG 
&74 ~Jameson Williams ~DET 
&75 ~Isaiah McKenzie ~BUF 
&76 ~KJ Hamler ~DEN 
&77 ~Parris Campbell ~IND 
&78 ~Jamison Crowder ~BUF 
&79 ~Alec Pierce ~IND 
&80 ~Curtis Samuel ~WAS 
&81 ~Donovan Peoples-Jones ~CLE 
&82 ~David Bell ~CLE 
&83 ~Sterling Shepard ~NYG 
&84 ~Kendrick Bourne ~NE 
&85 ~A.J. Green ~ARI 
&86 ~Zay Jones ~JAC 
&87 ~Romeo Doubs ~GB 
&88 ~Braxton Berrios ~NYJ 
&89 ~Terrace Marshall Jr. ~CAR 
&90 ~Byron Pringle ~CHI 
&91 ~Laviska Shenault Jr. ~CAR 
&92 ~Randall Cobb ~GB 
&93 ~Sammy Watkins ~GB 
&94 ~Bryan Edwards ~ATL 
&95 ~Cedrick Wilson Jr. ~MIA 
&96 ~Nelson Agholor ~NE 
&97 ~Marquez Callaway ~NO 
&98 ~Quez Watkins ~PHI 
&99 ~Josh Reynolds ~DET 
&100 ~Darius Slayton ~NYG 
&101 ~Tre'Quan Smith ~NO 
&102 ~Jalen Reagor ~MIN 
&103 ~Velus Jones Jr. ~CHI 
&104 ~William Fuller V ~FA 
&105 ~Nick Westbrook-Ikhine ~TEN 
&106 ~Quintez Cephus ~DET 
&107 ~Dyami Brown ~WAS 
&108 ~Devin Duvernay ~BAL 
&109 ~Odell Beckham Jr. ~FA 
&110 ~Kyle Philips ~TEN 
&111 ~Khalil Shakir ~BUF 
&112 ~James Proche II ~BAL 
&113 ~Jalen Guyton ~LAC 
&114 ~Amari Rodgers ~GB 
&115 ~Tyquan Thornton ~NE 
&116 ~Emmanuel Sanders ~FA 
&117 ~Calvin Austin III ~PIT 
&118 ~Demarcus Robinson ~BAL 
&119 ~Olamide Zaccheaus ~ATL 
&120 ~Danny Gray ~SF 
$
&1 ~Travis Kelce ~KC 
&2 ~Mark Andrews ~BAL 
&3 ~Kyle Pitts ~ATL 
&4 ~George Kittle ~SF 
&5 ~Darren Waller ~LV 
&6 ~Dalton Schultz ~DAL 
&7 ~Dallas Goedert ~PHI 
&8 ~T.J. Hockenson ~DET 
&9 ~Zach Ertz ~ARI 
&10 ~Cole Kmet ~CHI 
&11 ~Pat Freiermuth ~PIT 
&12 ~Dawson Knox ~BUF 
&13 ~Hunter Henry ~NE 
&14 ~Irv Smith Jr. ~MIN 
&15 ~Mike Gesicki ~MIA 
&16 ~Albert Okwuegbunam ~DEN 
&17 ~David Njoku ~CLE 
&18 ~Noah Fant ~SEA 
&19 ~Gerald Everett ~LAC 
&20 ~Tyler Higbee ~LAR 
&21 ~Robert Tonyan ~GB 
&22 ~Austin Hooper ~TEN 
&23 ~Evan Engram ~JAC 
&24 ~Logan Thomas ~WAS 
&25 ~Hayden Hurst ~CIN 
&26 ~Brevin Jordan ~HOU 
&27 ~Mo Alie-Cox ~IND 
&28 ~Jonnu Smith ~NE 
&29 ~Adam Trautman ~NO 
&30 ~C.J. Uzomah ~NYJ 
&31 ~Dan Arnold ~JAC 
&32 ~Cameron Brate ~TB 
&33 ~Trey McBride ~ARI 
&34 ~Kyle Rudolph ~TB 
&35 ~Tyler Conklin ~NYJ 
&36 ~Greg Dulcich ~DEN 
&37 ~O.J. Howard ~FA 
&38 ~Isaiah Likely ~BAL 
&39 ~Daniel Bellinger ~NYG 
&40 ~Harrison Bryant ~CLE 
&41 ~Tommy Tremble ~CAR 
&42 ~Donald Parham Jr. ~LAC 
&43 ~Foster Moreau ~LV 
&44 ~Jelani Woods ~IND 
&45 ~Cade Otton ~TB 
&46 ~Kylen Granson ~IND 
&47 ~John Bates ~WAS 
&48 ~Anthony Firkser ~ATL 
&49 ~Josiah Deguara ~GB 
&50 ~Jared Cook ~FA 
&51 ~Pharaoh Brown ~HOU 
&52 ~Juwan Johnson ~NO 
&53 ~Will Dissly ~SEA 
&54 ~Taysom Hill ~NO 
&55 ~Jeremy Ruckert ~NYJ 
&56 ~Durham Smythe ~MIA 
&57 ~Geoff Swaim ~TEN 
&58 ~Ian Thomas ~CAR 
&59 ~Ryan Griffin ~CHI 
&60 ~Jake Ferguson ~DAL 
$
&1 ~Justin Tucker ~BAL 
&2 ~Tyler Bass ~BUF 
&3 ~Evan McPherson ~CIN 
&4 ~Matt Gay ~LAR 
&5 ~Harrison Butker ~KC 
&6 ~Daniel Carlson ~LV 
&7 ~Ryan Succop ~TB 
&8 ~Matt Prater ~ARI 
&9 ~Jason Sanders ~MIA 
&10 ~Rodrigo Blankenship ~IND 
&11 ~Nick Folk ~NE 
&12 ~Brandon McManus ~DEN 
&13 ~Dustin Hopkins ~LAC 
&14 ~Younghoe Koo ~ATL 
&15 ~Robbie Gould ~SF 
&16 ~Jake Elliott ~PHI 
&17 ~Greg Joseph ~MIN 
&18 ~Wil Lutz ~NO 
&19 ~Chris Boswell ~PIT 
&20 ~Mason Crosby ~GB 
&21 ~Greg Zuerlein ~NYJ 
&22 ~Graham Gano ~NYG 
&23 ~Jason Myers ~SEA 
&24 ~Randy Bullock ~TEN 
&25 ~Cairo Santos ~CHI 
&26 ~Ka'imi Fairbairn ~HOU 
&27 ~Cade York ~CLE 
&28 ~Brett Maher ~DAL 
&29 ~Joey Slye ~WAS 
&30 ~Austin Seibert ~DET 
&31 ~Riley Patterson ~JAC 
&32 ~Chase McLaughlin ~FA 
&33 ~Josh Lambo ~FA 
&34 ~Jonathan Garibay ~FA 
&35 ~Eddy Pineiro ~CAR 
&36 ~Ryan Santoso ~FA 
&37 ~James McCourt ~FA 
&38 ~Aldrick Rosas ~DET 
&39 ~Tristan Vizcaino ~FA 
&40 ~Michael Badgley ~FA 
$
&1 ~Buffalo Bills ~BUF 
&2 ~Tampa Bay Buccaneers ~TB 
&3 ~San Francisco 49ers ~SF 
&4 ~Indianapolis Colts ~IND 
&5 ~Los Angeles Rams ~LAR 
&6 ~New Orleans Saints ~NO 
&7 ~Denver Broncos ~DEN 
&8 ~New England Patriots ~NE 
&9 ~Dallas Cowboys ~DAL 
&10 ~Los Angeles Chargers ~LAC 
&11 ~Green Bay Packers ~GB 
&12 ~Miami Dolphins ~MIA 
&13 ~Baltimore Ravens ~BAL 
&14 ~Kansas City Chiefs ~KC 
&15 ~Cleveland Browns ~CLE 
&16 ~Pittsburgh Steelers ~PIT 
&17 ~Philadelphia Eagles ~PHI 
&18 ~Cincinnati Bengals ~CIN 
&19 ~Tennessee Titans ~TEN 
&20 ~Arizona Cardinals ~ARI 
&21 ~Minnesota Vikings ~MIN 
&22 ~Carolina Panthers ~CAR 
&23 ~Washington Commanders ~WAS 
&24 ~Chicago Bears ~CHI 
&25 ~New York Giants ~NYG 
&26 ~New York Jets ~NYJ 
&27 ~Seattle Seahawks ~SEA 
&28 ~Las Vegas Raiders ~LV 
&29 ~Jacksonville Jaguars ~JAC 
&30 ~Detroit Lions ~DET 
&31 ~Atlanta Falcons ~ATL 
&32 ~Houston Texans ~HOU `

module.exports = str2;