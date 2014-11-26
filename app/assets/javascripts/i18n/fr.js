var I18n = I18n || {};
I18n.translations = {"fr":{"devise":{"confirmations":{"confirmed":"Votre adresse courriel a \u00e9t\u00e9 confirm\u00e9e avec succ\u00e8s.","link":"Vous n'avez pas re\u00e7u d'instructions de confirmation ?","send_instructions":"Dans quelques minutes vous recevrez un courriel avec un lien pour confirmer votre adresse courriel.","send_paranoid_instructions":"Si votre compte existe, vous recevrez dans quelques minutes un courriel avec des instructions pour confirmer votre compte."},"destroy":{"confirm":"\u00cates-vous certain ?","headline":"Supprimer le compte","link":"Supprimer maintenant"},"edit":{"form":{"labels":{"current_password":"Mot de passe actuel <i>(requis pour confirmer vos changements)</i>","email":"Courriel","password":"Mot de passe <i>(laissez vide si vous ne voulez pas le changer)</i> ","password_confirmation":"R\u00e9p\u00e9ter le mot de passe"},"submit":"Enregistrer les changements"},"headline":"Modifier le compte"},"failure":{"already_authenticated":"Vous \u00eates d\u00e9j\u00e0 connect\u00e9.","inactive":"Votre compte n'a pas encore \u00e9t\u00e9 activ\u00e9.","invalid":"Courriel ou mot de passe invalide.","invalid_token":"Jeton d'authentification invalide","locked":"Votre compte est verrouill\u00e9","timeout":"Votre session est expir\u00e9e, veuillez vous reconnecter pour continuer.","unauthenticated":"Vous devez vous connecter ou vous inscrire avant de continuer","unconfirmed":"Vous devez confirmer votre compte avant de continuer."},"mailer":{"confirmation_instructions":{"landing_page":"Veuillez cliquer sur le lien que nous venons d'envoyer \u00e0 votre adresse courriel. Si vous ne recevez pas notre courriel, veuillez d'abord v\u00e9rifier s'il ne se cache pas dans votre dossier de pourriels. S'il ne s'y trouve pas, retournez \u00e0 la page d'inscription et ressayez.","subject":"Encore une \u00e9tape pour activer votre compte"},"reset_password_instructions":{"subject":"Instructions de r\u00e9initialisation du mot de passe"},"unlock_instructions":{"subject":"Instructions de d\u00e9verrouillage"}},"mandatory":"* Exig\u00e9","omniauth_callbacks":{"failure":"\u00c9chec lors de l'autorisation avec %{kind} : \u00ab %{reason} \u00bb.","permission_missing":"Vous n'avez pas accord\u00e9 les droits exig\u00e9s.","success":"Connect\u00e9 avec succ\u00e8s avec %{kind}."},"password_recovery":{"form":{"labels":{"email":"Courriel"},"submit":"R\u00e9initialiser le mot de passe"},"headline":"Mot de passe oubli\u00e9 ?"},"password_reset":{"email":{"comment":"Si vous n'avez pas demand\u00e9 de r\u00e9initialisation de mot de passe, ignorez juste ce courriel.<br/>Votre mot de passe ne sera pas chang\u00e9, sauf si vous cliquez sur le lien ci-dessus et que vous d\u00e9finissez un nouveau mot de passe.","headline":"Bienvenue %{email}","link":"Changer mon mot de passe","text":"Une demande a \u00e9t\u00e9 faite pour changer votre mot passe. S'il s'agissait de vous, cliquez sur le lien suivant - autrement ignorez-la."},"form":{"labels":{"password":"Nouveau mot de passe","password_confirmation":"R\u00e9p\u00e9ter le mot de passe"},"submit":"R\u00e9initialiser le mot de passe"},"headline":"R\u00e9initialiser le mot de passe"},"passwords":{"link":"Mot de passe oubli\u00e9 ?","send_instructions":"Vous recevrez dans quelques minutes un courriel avec des instructions pour r\u00e9initialiser votre mot de passe","send_paranoid_instructions":"Si votre compte existe, vous recevrez dans quelques minutes un courriel avec des instructions pour r\u00e9initialiser votre mot de passe","updated":"Votre mot de passe a \u00e9t\u00e9 chang\u00e9 avec succ\u00e8s. Vous \u00eates maintenant connect\u00e9","updated_not_active":"Votre mot de passe a \u00e9t\u00e9 chang\u00e9 avec succ\u00e8s"},"registrations":{"destroyed":"Au revoir ! Votre compte a \u00e9t\u00e9 annul\u00e9 avec succ\u00e8s. Nous esp\u00e9rons vous revoir bient\u00f4t.","inactive_signed_up":"Vous vous \u00eates inscrit avec succ\u00e8s, mais nous n'avons pas pu vous connecter. Raison : \u00ab %{reason} \u00bb","link":"Inscription","reasons":{"inactive":"inactif","locked":"verrouill\u00e9","unconfirmed":"non confirm\u00e9"},"signed_up":"Vous vous \u00eates inscrit avec succ\u00e8s. Une confirmation vous a \u00e9t\u00e9 envoy\u00e9e par courriel.","updated":"Vous avez mis votre compte \u00e0 jour avec succ\u00e8s."},"sessions":{"inactive":"Votre compte n'a pas encore \u00e9t\u00e9 activ\u00e9","invalid":"Courriel ou mot de passe invalide.","invalid_token":"Jeton d'authentification invalide","link":"Connexion","locked":"Votre compte est verrouill\u00e9","new":{"no_osm_account":"Vous n'avez pas de compte OpenStreetMap ?","osm_promo_text":"Wheelmap est bas\u00e9e sur des donn\u00e9es g\u00e9ographiques d'OpenStreetMap (OSM). OpenStreetMap est une mappemonde libre et gratuite cr\u00e9\u00e9e par des personnes comme vous. Une Wikip\u00e9dia des cartes. Pour pouvoir modifier des lieux ou en ajouter de nouveaux, vous devez avoir un compte OpenStreetMap et y \u00eatre connect\u00e9.","promo_text_thank_you":"Merci beaucoup pour votre soutien !","sign_in_with":"Connexion avec %{kind}","sign_up_with_osm":"Inscrivez-vous maintenant.","wheelmap_promo_text":"Gr\u00e2ce \u00e0 votre connaissance des endroits accessibles en fauteuil roulant, vous aidez les personnes \u00e0 mobilit\u00e9 r\u00e9duite \u00e0 mieux organiser leur vie de tous les jours. De plus, OpenStreetMap s'enrichit consid\u00e9rablement en d\u00e9tails."},"signed_in":"Connect\u00e9 avec succ\u00e8s","signed_out":"Vous vous \u00eates d\u00e9connect\u00e9 avec succ\u00e8s","timeout":"Votre session est expir\u00e9, veuillez vous reconnecter pour continuer.","unauthenticated":"Vous devez vous connecter ou vous inscrire avant de continuer","unconfirmed":"Vous devez confirmer votre compte avant de continuer"},"sign_in":{"form":{"labels":{"email":"Courriel","password":"Mot de passe","remember_me":"Rester connect\u00e9 ?"},"submit":"Connexion"},"headline":"Connexion"},"sign_out":{"headline":"D\u00e9connexion"},"sign_up":{"email":{"confirm_my_account":"Confirmer mon compte","please_confirm":"Vous pouvez confirmer votre compte avec le lien ci-dessous :","welcome":"Bienvenue %{email} !"},"form":{"labels":{"email":"Courriel","password":"Mot de passe","password_confirmation":"R\u00e9p\u00e9ter le mot de passe","wants_newsletter":"Oui, tenez-moi au courant des nouveaut\u00e9s sur Wheelmap - mais pas plus d'une fois par mois."},"submit":"Inscription"},"headline":"Inscription"},"unlocks":{"link":"Vous n'avez pas re\u00e7u les instructions de d\u00e9verrouillage ?","send_instructions":"Vous recevrez dans quelques minutes un courriel avec des instructions pour d\u00e9verrouiller votre compte","send_paranoid_instructions":"Si votre compte existe, vous recevrez dans quelques minutes un courriel avec des instructions pour d\u00e9verrouiller votre compte","unlocked":"Votre compte a \u00e9t\u00e9 d\u00e9verrouill\u00e9 avec succ\u00e8s. Vous \u00eates maintenant connect\u00e9."}},"poi":{"category":{"accommodation":"H\u00e9bergement","education":"\u00c9ducation","food":"Nourriture","government":"Gouvernement","health":"Sant\u00e9","leisure":"Loisirs","misc":"Divers","money_post":"Banque","public_transfer":"Transport en commun","shopping":"Magasinage","sport":"Sport","tourism":"Tourisme","unknown":"Inconnu"},"name":{"accommodation":{"beach_resort":"H\u00f4tel pr\u00e8s de la plage","bed_and_breakfast":"G\u00eete touristique","camp_site":"Site de camping","caravan_site":"Site caravanier","chalet":"Chalet","dormitory":"Dortoir","guest_house":"Petit h\u00f4tel","hostel":"Auberge","hotel":"H\u00f4tel","motel":"Motel"},"education":{"college":"\u00c9tablissement post-secondaire","driving_school":"Auto-\u00e9cole","kindergarten":"Maternelle","library":"Biblioth\u00e8que","museum":"Mus\u00e9e","school":"\u00c9cole","university":"Universit\u00e9"},"food":{"bar":"Bar","biergarten":"Brasserie en plein air","cafe":"Caf\u00e9","drinking_water":"Eau potable","fast_food":"Restauration rapide","ice_cream":"Cr\u00e8me/yogourt glac\u00e9","pub":"Pub","restaurant":"Restaurant"},"government":{"courthouse":"Palais de justice","embassy":"Ambassade","government":"Agence gouvernementale","police":"Police","public_building":"B\u00e2timent ouvert au public","townhall":"H\u00f4tel de ville"},"health":{"dentist":"Dentiste","doctors":"M\u00e9decin","hearing_aids":"Audioproth\u00e9siste","hospital":"H\u00f4pital","medical_supply":"\u00c9quipement m\u00e9dical","pharmacy":"Pharmacie","social_facility":"\u00c9tablissement social","veterinary":"V\u00e9t\u00e9rinaire"},"leisure":{"arena":"Stade","brothel":"Maison close","casino":"casino","cinema":"Cin\u00e9ma","community_center":"Centre communautaire","gallery":"Galerie","nightclub":"Bo\u00eete de nuit","playground":"Terrain de jeu","sauna":"Sauna","stripclub":"Club de striptease","theatre":"Th\u00e9\u00e2tre","zoo":"Zoo"},"misc":{"company":"Entreprise (bureau)","estate_agent":"Agent immobilier","insurance":"Assurance","lawyer":"Avocat","place_of_worship":"Lieu de culte","toilets":"Toilettes"},"money_post":{"atm":"GAB","bank":"Banque","bureau_de_change":"Bureau de change","post_box":"Bo\u00eete aux lettres","post_office":"Bureau de poste"},"public_transfer":{"aerodrome":"A\u00e9roport","bicycle_parking":"Stationnement \u00e0 v\u00e9los","bicycle_rental":"Location de v\u00e9los","boatyard":"Chantier maritime","bus_station":"Gare routi\u00e8re","bus_stop":"Arr\u00eat de bus","cable_car":"T\u00e9l\u00e9ph\u00e9rique","car_rental":"Location de voiture","car_sharing":"Autopartage","chair_lift":"T\u00e9l\u00e9si\u00e8ge","ferry":"Traversier","ferry_terminal":"Gare maritime","fuel":"Station service","halt":"Halte","light_rail":"Syst\u00e8me l\u00e9ger sur rail","parking":"Stationnement","parking_aisle":"Voie de stationnement","platform":"Quai de gare","station":"Gare f\u00e9roviaire","subway_entrance":"Entr\u00e9e de m\u00e9tro","terminal":"A\u00e9rogare","tram_stop":"Arr\u00eat de tramway"},"shopping":{"alcohol":"Alcool","bakery":"Boulangerie","beauty":"Salon d'esth\u00e9tique","beverages":"Boissons","bicycle":"Magasin de v\u00e9los","books":"Livres","butcher":"Boucherie","car_repair":"R\u00e9paration auto","car_shop":"Concessionnaire auto","chemist":"Droguerie","clothes":"V\u00eatements","computer":"Ordinateur","confectionery":"Magasin de bonbons","convenience":"Magasin d'appoint","deli":"\u00c9picerie fine","department_store":"Grand magasin","doityourself":"Magasin de bricolage","dry_cleaning":"Nettoyage \u00e0 sec","electronics":"\u00c9lectronique","fabric":"Magasin de tissus","farm_shop":"Produits fermiers","florist":"Fleuriste","furniture":"Ameublement","garden_centre":"Jardinerie","gift":"Boutique de cadeaux","hairdresser":"Coiffeur","hardware":"Quincaillerie","jewelry":"Bijouterie","kiosk":"Kiosque","laundry":"Laverie","mall":"Centre commercial","optician":"Opticien","organic":"Magasin de produits biologiques","outdoor":"\u00c9quipement de plein air","pet":"Animalerie","photo":"Photo","second_hand":"Friperie","shoes":" Chaussures","sports":" Sports","stationery":"Papeterie","supermarket":"Supermarch\u00e9","toys":"Jouets","travel_agency":"Agence de voyage","video":"Location vid\u00e9o"},"sport":{"pitch":"Terrain de sport","sports_centre":"Centre de sport","stadium":"Stade","swimming":"Piscine","swimming_pool":"Piscine"},"tourism":{"archaeological_site":"Site arch\u00e9ologique","arts_centre":"Centre des arts","artwork":"Oeuvre d'art ","attraction":"Attraction","battlefield":"Champ de bataille","beach":"Plage","beacon":"Phare","castle":"Ch\u00e2teau","cave_entrance":"Entr\u00e9e d'une grotte","information":"Informations touristiques","memorial":"M\u00e9morial","theme_park":"Parc d'attractions","tower":"Tour","viewpoint":"Point de vue"},"unknown":{"unknown":"Inconnu"}}},"date":{"abbr_day_names":["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],"abbr_month_names":[null,"Janv","F\u00e9v","Mars","Avr","Mai","Juin","Juill","Ao\u00fbt","Sept","Oct","Nov","D\u00e9c"],"day_names":["dimanche","lundi","mardi","mercredi","jeudi","ventredi","samedi"],"formats":{"default":"%d-%m-%Y ","long":"%e %B %Y","short":"%e %b"},"month_names":[null,"janvier","f\u00e9vrier","mars","avril","mai","juin","juillet","ao\u00fbt","septembre","octobre","novembre","d\u00e9cembre"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"une heure environ","other":"%{count} heures environ"},"about_x_months":{"one":"un mois environ","other":"%{count} mois environ"},"about_x_years":{"one":"un an environ","other":"%{count} ans environ"},"almost_x_years":{"one":"presque 1 an","other":"presque %{count} ans"},"half_a_minute":"une demi-minute","less_than_x_minutes":{"one":"moins d'une minute","other":"moinds de %{count} minutes"},"less_than_x_seconds":{"one":"moins d'une seconde","other":"moins de %{count} secondes"},"over_x_years":{"one":"plus d'un an","other":"plus de %{count} ans"},"x_days":{"one":"un jour","other":"%{count} jours"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"un mois","other":"%{count} mois"},"x_seconds":{"one":"1 seconde","other":"%{count} secondes"}},"prompts":{"day":"Jour","hour":"Heure","minute":"Minute","month":"Mois","second":"Secondes","year":"An"}},"activerecord":{"attributes":{"user":{"first_name":"Pr\u00e9nom","last_name":"nom de famille","privacy_policy":"r\u00e8glementation de la protection de donn\u00e9es","terms":"conditions d'utilisation"},"poi":{"name":"Nom","type":"Type","address":"Adresse","website":"Site Web","phone":"T\u00e9l\u00e9phone","note":"Note","address_street":"Rue","address_housenumber":"Num\u00e9ro civique","address_postcode":"Code postal","address_city":"Ville"}},"errors":{"full_messages":{"format":"%{attribute} %{message}"},"messages":{"accepted":"doit \u00eatre accept\u00e9","blank":"champ obligatoire","confirmation":"ne correspond pas \u00e0 la confirmation","empty":"champ obligatoire","equal_to":"doit \u00eatre \u00e9gal \u00e0 %{count}","even":"doit \u00eatre pair","exclusion":"pas disponible","greater_than":"doit \u00eatre sup\u00e9rieur \u00e0 %{count}","greater_than_or_equal_to":"doit \u00eatre sup\u00e9rieur ou \u00e9gal \u00e0 %{count}","inclusion":"n'est pas dans la liste","invalid":"est non valide","less_than":"doit \u00eatre plus petit que %{count}","less_than_or_equal_to":"doit \u00eatre inf\u00e9rieur ou \u00e9gal \u00e0 %{count}","not_a_number":"n'est pas un nombre","odd":"doit \u00eatre impair","record_invalid":"La validation a \u00e9chou\u00e9: %{errors}","taken":"est d\u00e9j\u00e0 donn\u00e9","too_long":"est trop long (le maximum est %{count} caract\u00e8res)","too_short":"est trop court ( minimum %{count} caract\u00e8res)","wrong_length":"n'a pas la bonne longueur (doit comporter %{count} caract\u00e8res)"},"models":{"user":{"attributes":{"email":{"blank":"doit \u00eatre compl\u00e9t\u00e9 en cas de ........ mot de pass"},"privacy_policy":{"accepted":"acceptation obligatoire"},"terms":{"accepted":"acceptation obligatoire"}}},"user_session":{"email":"Adresse mail","password":"Mot de passe","remember_me":"Rester connect\u00e9"}},"template":{"body":"Merci de v\u00e9rifier les champs suivants:","header":{"one":"Impossible d'enregistrer ce %{model} :  erreur","other":"Impossible d'enregistrer ce %{model} : %{count} erreurs"}}},"models":{"user":"utilisateur"}},"faq":{"answers":{"0":"Vous pouvez toujours modifier le marquage d'un lieu vous-m\u00eame. Choisissez juste le bon marquage et enregistrez - voil\u00e0 !","1":"En tant qu'utilisateur connect\u00e9, vous pouvez ajouter/corriger toutes les informations d'un lieu. Cliquez sur \u00ab Modifier \u00bb pour corriger ou ajouter des informations dans le masque.","2":"Vous pouvez ajouter d'autres informations (p. ex. : \u00ab Ce lieu a une rampe mobile \u00bb) dans la rubrique commentaire. Cliquez sur \u00ab Modifier \u00bb et \u00ab Ajouter un commentaire \u00bb."},"headline":"Y a-t-il un probl\u00e8me avec ce lieu ?","questions":{"0":"Le marquage est erron\u00e9.","1":"Les d\u00e9tails de ce lieu sont incorrects ou manquants.","2":"J'ai d'autres informations sur ce lieu."}},"header":{"navigation":{"about_wheelmap":"\u00c0 propos de Wheelmap","choose_language":"Choisir une langue","contact":"Contact","map":"Carte","projects":"Projets","blog":"Nouvelles","feedback":"Commentaires","home":"D\u00e9marrer","how_to_add_a_place":"Comment ajouter des lieux ?","imprint":"Mentions l\u00e9gales","logged_in_as":"Connect\u00e9 en tant que :","login":"Connexion","logout":"D\u00e9connexion","newsletter":"Lettre d'information","press":"Presse","profile":"Profil","suggestions":"Suggestions","what_is_barrier_free":"Que veut dire \u00ab accessible en fauteuil roulant \u00bb ?","what_is_wheelmap":" Wheelmap, qu'est-ce que c'est ?"},"toolbar":{"categories":"Cat\u00e9gories"},"meta":{"description":"Trouvez des lieux accessibles en fauteuil roulant - wheelmap.org","homepage":"Page d'accueil","keywords":"fauteuil roulant accessibles lieux trouver chercher marquer","search":"Recherche"},"searchbar":{"add_place":"Ajouter un autre lieu","find":"Trouver","placeholder":"Chercher un lieu","title_add_place":"Ajouter un nouveau lieu \u00e0 cet endroit maintenant !"},"tagline":"Logo Wheelmap","title":"trouver des lieux accessibles en fauteuil roulant"},"home":{"index":{"overlay":{"button":"Ok, on y va !","categories":"Filtrer les lieux par cat\u00e9gories","filter":"Filtrer les lieux selon l'accessibilit\u00e9 en fauteuil roulant","headline":"Marquer et trouver des lieux accessibles en fauteuil roulant gr\u00e2ce \u00e0 Wheelmap.org - \u00e0 travers le monde et gratuitement. C'est facile :","lookup":"Chercher un lieu sp\u00e9cifique","secondary_headline":"Notre syst\u00e8me de feux de circulation pour marquer l'accessibilit\u00e9 en fauteuil roulant des lieux publics :"},"filter":{"category":"Choisir une cat\u00e9gorie :","deselect_all":"Tout d\u00e9s\u00e9lectionner","select_all":"Tout s\u00e9lectionner","wheelchair":"Accessible en fauteuil roulant ?"},"ie":{"action":{"ignore":"Ignorer","upgrade":"Mettre le navigateur \u00e0 jour"},"warning":{"headline":"Nous sommes d\u00e9sol\u00e9s ! ","message":"Vous semblez utiliser Internet Explorer. Wheelmap exige un navigateur r\u00e9pondant aux standards pour fonctionner correctement. Veuillez prendre en consid\u00e9ration l'utilisation de Firefox, de Chrome, de Safari ou d'Opera."}},"link":{"node":{"create":"Ajouter un nouveau lieu"}},"popup":{"form":{"limited":"partiellement accessible en fauteuil roulant","no":"non-accessible en fauteuil roulant","save":"Mettre \u00e0 jour","unknown":"\u00e9tat inconnu","yes":"accessible en fauteuil roulant"},"help":"Accessible en fauteuil roulant ? (aide)","more":"davantage.."}}},"nodes":{"new":{"form":{"legend":"Emplacement du lieu","location":"Veuillez cliquer sur la carte et placer le marqueur \u00e0 l'emplacement exact."},"header":{"title":"Nouveau lieu | wheelmap.org"},"link":{"large_map":"&laquo; Annuler"}},"node_data":{"address":"Adresse :","contact_details":"Coordonn\u00e9es :"},"node_edit":{"details":"D\u00e9tails","edit":"Modifier"},"node_map":{"map":"Carte :"},"node_note":{"comment":"Commentaire :"},"node_photos":{"add":"Ajouter","photos_of_this_place":"Photos de ce lieu :","upload":"T\u00e9l\u00e9verser"},"node_similar":{"similar":"Lieux similaires : %{name}"},"node_status":{"accessible_toilet":"Toilettes accessibles en fauteuil roulant :","premium":"%{name} dit : cet endroit est","wheelchair_accessibility":"Accessibilit\u00e9 en fauteuil roulant :"},"node_streetview":{"streetview":"Vue de la rue :"},"show":{"header":{"meta":{"description":"D\u00e9couvrez si ce lieu est accessible en fauteuil roulant sur Wheelmap.org. Ou ajoutez des informations et des photos \u00e0 ce lieu.","title":"Ce lieu se trouve sur Wheelmap.org : %{name}"},"title":"Lieu : %{node} | wheelmap.org "},"share":{"email":"Courriel :","facebook":"Facebook","text":"J'ai trouv\u00e9 ce lieu sur Wheelmap.org : %{name}","twitter":"Twitter"},"link":{"back":"retour","large_map":"Agrandir","listing":"Tous les lieux de type %{type} \u00e0 %{city}","upload":"T\u00e9l\u00e9verser l'image"},"more_data_from":"Il y a d'autres donn\u00e9es pour ce lieu, v\u00e9rifi\u00e9 par :","show-in-osm":"OpenStreetMap"},"create":{"flash":{"not_successfull":"D\u00e9sol\u00e9, votre saisie \u00e9tait erron\u00e9e ou incompl\u00e8te.","successfull":"Merci, votre envoi a \u00e9t\u00e9 enregistr\u00e9 avec succ\u00e8s et sera en ligne sous peu."}},"edit":{"header":{"title":"Modifier le lieu : %{node} | wheelmap.org "},"link":{"large_map":"&laquo ; Annuler"}},"errors":{"default":"D\u00e9sol\u00e9, une erreur est survenue et nous a \u00e9t\u00e9 signal\u00e9e","not_authorized":"\u00c9chec lors de l'authentification.","not_available":"D\u00e9sol\u00e9, cette page n'est temporairement pas disponible.","not_existent":"D\u00e9sol\u00e9, ce lieu n'est plus disponible.","not_found":"D\u00e9sol\u00e9, page introuvable.","param_missing":"Veuillez fournir un terme d'interrogation"},"flash":{"authorize_wheelmap":"Il vous faut un compte OpenStreetMap pour modifier les donn\u00e9es"},"node":{"link":{"claim":"Travaillez-vous ici ?","edit_node":"Modifier le lieu","report_bug":"Signaler un probl\u00e8me"}},"update":{"flash":{"not_successfull":"D\u00e9sol\u00e9, votre entr\u00e9e \u00e9tait erron\u00e9e ou incompl\u00e8te","successfull":"Merci, votre envoi a \u00e9t\u00e9 enregistr\u00e9 avec succ\u00e8s et sera en ligne sous peu."}},"update_wheelchair":{"successfull":"L'\u00e9tat de \u00ab %{name} \u00bb a \u00e9t\u00e9 modifi\u00e9 \u00e0 \u00ab %{status} \u00bb et sera en ligne sous peu."}},"search":{"index":{"no-results":{"headline":"D\u00e9sol\u00e9, nous n'avons pas pu trouver d'endroit appel\u00e9 \u00ab %{query} \u00bb.","hint":{"example":"<strong>Exemple :</strong> Londres, Royaume-Uni","info":"Notre service de recherche ne fonctionne qu'avec un nom et/ou une adresse. Par cons\u00e9quent, veuillez donc rechercher soit le nom du lieu, soit une adresse, p. ex. nom de la rue et/ou ville. La recherche d'un type de lieu, p. ex. restaurant ou cin\u00e9ma,  ne fonctionne pas !","work_in_progress":"Nous travaillons fort afin de rendre la recherche de lieux encore plus facile et plus intuitive dans le futur."},"try_this":{"address":"Veuillez fournir plus d'<strong>informations concernant l'adresse</strong>.","intro":"Essayez ceci :","spell_check":"V\u00e9rifiez l'<strong>orthographe</strong> de votre saisie."}},"results":{"ticker":{"one":"%{count} r\u00e9sultat :","other":"%{count} r\u00e9sultats :"}},"search":{"for":"Rechercher \u00ab %{q} \u00bb ","not_found":"Aucun lieu n'a \u00e9t\u00e9 trouv\u00e9 !"}},"timeout":{"headline":"Oh, notre faute","info":"Notre service de recherche \u00e9tait temporairement indisponible.","repeat_search":"Ressayer la recherche"}},"application":{"require_no_user":{"notice":"Vous \u00eates d\u00e9j\u00e0 connect\u00e9..."},"require_user":{"notice":"Vous devez \u00eatre connect\u00e9 pour voir cette page."}},"breadcrumbs":{"node":{"create":"Ajouter un nouveau lieu","edit":"Modifier un lieu"},"root":"wheelmap"},"common":{"close":"fermer","skip":"passer"},"errors":{"dynamic_format":"%{message}","format":"%{attribute} %{message}","messages":{"accepted":"doit \u00eatre accept\u00e9","already_confirmed":"a d\u00e9j\u00e0 \u00e9t\u00e9 confirm\u00e9","blank":"doit \u00eatre rempli","confirmation":"ne correspond pas \u00e0 la confirmation","empty":"doit \u00eatre rempli","equal_to":"doit \u00eatre exactement %{count}","even":"doit \u00eatre pair","exclusion":"est r\u00e9serv\u00e9","expired":"expir\u00e9, veuillez en demander un nouveau","greater_than":"doit \u00eatre sup\u00e9rieur \u00e0 %{count}","greater_than_or_equal_to":"doit \u00eatre sup\u00e9rieur ou \u00e9gal \u00e0 %{count}","inclusion":"n'est pas une valeur valide","invalid":"invalide","less_than":"doit \u00eatre inf\u00e9rieur \u00e0 %{count} ","less_than_or_equal_to":"doit \u00eatre inf\u00e9rieur ou \u00e9gal \u00e0 %{count}","not_a_number":"n'est pas un nombre","not_an_integer":"doit \u00eatre un entier","not_found":"est introuvable","not_locked":"n'\u00e9tait pas verrouill\u00e9","not_saved":{"one":"Une erreur a emp\u00each\u00e9 l'enregistrement de %{resource} :","other":"%{count} erreurs ont emp\u00each\u00e9 l'enregistrement de %{resource} :"},"odd":"doit \u00eatre impair","taken":"est d\u00e9j\u00e0 utilis\u00e9","too_long":"est trop long (pas plus de %{count} caract\u00e8res)","too_short":"est trop court (pas moins de %{count} caract\u00e8res)","wrong_length":"n'a pas la bonne longueur (devrait avoir %{count} caract\u00e8res)"},"template":{"body":"Il y avaient des probl\u00e8mes avec les champs suivants :","header":{"one":"Une erreur a emp\u00each\u00e9 l'enregistrement de %{model}","other":"%{count} erreurs ont emp\u00each\u00e9 l'enregistrement de %{model} "}}},"flash":{"actions":{"create":{"notice":"%{resource_name} a \u00e9t\u00e9 cr\u00e9\u00e9 avec succ\u00e8s"},"destroy":{"alert":"%{resource_name} n'a pas pu \u00eatre enlev\u00e9","notice":"%{resource_name} a \u00e9t\u00e9 d\u00e9truit avec succ\u00e8s"},"update":{"notice":"%{resource_name} a \u00e9t\u00e9 mis \u00e0 jour avec succ\u00e8s"}},"photos":{"destroy":{"notice":"L'image a \u00e9t\u00e9 supprim\u00e9e avec succ\u00e8s"}}},"form":{"show_fully_accessible_places":"Accessible en fauteuil roulant","show_limited_accessible_places":"partiellement accessible en fauteuil roulant","show_places_without_status":"\u00e9tat inconnu","show_unaccessible_places":"non accessible en fauteuil roulant"},"formtastic":{"hints":{"email":"Nous traitons votre adresse confidentiellement, pas de pourriel. Promis !","lat":"D\u00e9placez sur la carte le marqueur \u00e0 la bonne position","osm_username":"Pas encore membre ?  <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Cr\u00e9ez un compte Openstreetmap maintenant</a>","password":"(laissez vide si vous ne voulez pas le modifier)","phone":"Par exemple :  +49 30 123456-78      ","website":"Par exemple : http://www.exemple.com "},"labels":{"category":"Cat\u00e9gorie :","centralkey":"Clef centrale :","city":"Ville :","create":"Cr\u00e9er un lieu","email":"Courriel","finish":"Terminer","housenumber":"Num\u00e9ro :","lat":"Latitude","lon":"Longitude","name":"Nom :","osm_password":"Mot de passe OSM","osm_username":"Nom d'utilisateur OSM","password":"Mot de passe","password_confirmation":"R\u00e9p\u00e9ter le mot de passe","phone":"T\u00e9l\u00e9phone :","postcode":"Code postal :","privacy_policy":"J'accepte les paragraphes 1 et 2 de la convention de confidentialit\u00e9 des donn\u00e9es.","reset":"R\u00e9initialiser","save":"Enregistrer","street":"Rue :","terms":"J'accepte les conditions g\u00e9n\u00e9rales d'utilisation.","type":"Type :","website":"Site Web :","wheelchair":"Accessibilit\u00e9 en fauteuil roulant ?","wheelchair_description":"Commentaire sur l'accessibilit\u00e9 :"},"titles":{"basic":"Donn\u00e9es de base","optional":"Plus d'informations <span class=\"addition\">(tous les champs sont optionnels)</span>"}},"global":{"form_validation_error":"Veuillez consulter les erreurs indiqu\u00e9es ci-dessous"},"helpers":{"select":{"prompt":"Veuillez choisir"},"submit":{"create":"cr\u00e9er %{model} ","submit":"enregistrer %{model} ","update":"mettre \u00e0 jour %{model}"}},"how?":"Comment ?","landing_pages":{"index":{"wheelchair":{"limit":{"headline":"Les %{type} \u00e0 acc\u00e8s limit\u00e9 en fauteuil roulant \u00e0 %{city} (%{count})"},"no":{"headline":"Les %{type} non accessibles en fauteuil roulant \u00e0 %{city} (%{count})"},"unknown":{"headline":"Les %{type} de %{city} dont l'\u00e9tat d'accessibilit\u00e9 est inconnu  (%{count})"},"yes":{"headline":"Les %{type} accessibles en fauteuil roulant \u00e0 %{city} (%{count})"}}}},"layouts":{"application":{"banner":{"alt":"Un projet par Sozialhelden.de"}}},"node":{"address":{"city":"%{city} %{postcode}","street":"%{housenumber} %{street} "},"tags":{"phone":"T\u00e9l\u00e9phone : ","website":"Site Web :"}},"number":{"currency":{"format":{"delimiter":",","format":"%n %u","precision":2,"separator":".","significant":0,"strip_insignificant_zeros":0,"unit":"\u20ac"}},"format":{"delimiter":",","precision":3,"separator":".","significant":0,"strip_insignificant_zeros":0},"human":{"decimal_units":{"format":"%n %u ","units":{"billion":"milliard","million":"million","quadrillion":"quadrillion","thousand":"Mille","trillion":"trillion","unit":null}},"format":{"delimiter":null,"precision":1,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"octet","other":"octets"},"gb":"GB ","kb":"KB ","mb":"MB","tb":"TB"}}},"percentage":{"format":{"delimiter":null}},"precision":{"format":{"delimiter":null}}},"oauth":{"application":{"connect":{"headline":"Vous devez connecter votre compte \u00e0 votre compte \u00ab OpenStreetMap \u00bb avant de pouvoir cr\u00e9er ou modifier des lieux sur wheelmap.org."}},"callback":{"notice":"Votre compte Wheelmap est maintenant connect\u00e9 \u00e0 votre compte %{user} sur OpenStreetMap."}},"or":"ou","place":{"one":"%{count} lieu","other":"%{count} lieux"},"profile":{"edit":{"application":{"oauth":{"connected":"\u00c9tat : connect\u00e9","grant":"Se connecter maintenant","not_connected":"\u00c9tat : non connect\u00e9","revoke":"Se d\u00e9connecter"}},"headline":"Modifier votre profil"}},"splash":{"countline":"%{count} lieux ont d\u00e9j\u00e0 \u00e9t\u00e9 marqu\u00e9s.","headline":"Tout le monde peut ajouter des lieux accessibles en fauteuil roulant !","start":"D\u00e9marrer","step1":"Cliquez sur un lieu que vous connaissez","step2":"Marquez le et cliquez sur enregistrer","step3":"C'est tout ! Aucune inscription n\u00e9cessaire","what_is_wheelmap":"Qu'est-ce que Wheelmap ?"},"statistics":"Statistiques","support":{"array":{"last_word_connector":"et","sentence_connector":"et","skip_last_comma":true,"two_words_connector":"et","words_connector":","},"select":{"prompt":"Veuillez choisir"}},"time":{"am":"avant midi","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"apr\u00e8s-midi"},"user_sessions":{"create":{"activation":{"notice":"Votre compte est maintenant activ\u00e9 !"},"error":{"notice":"L'adresse courriel et le mot de passe ne correspondent pas."},"notice":"Vous \u00eates connect\u00e9 !"},"destroy":{"notice":"Au revoir, revenez bient\u00f4t !"},"new":{"email":"Adresse courriel","login":"Connexion","login_with_twitter":"Se connecter avec Twitter","password":"Mot de passe","remember_me":"Rester connect\u00e9"}},"users":{"after_signup_edit":{"welcome":{"headline":"Vous y \u00eates presque ! Compl\u00e9tez ici votre inscription \u00e0 votre compte Wheelmap :","set_password_for_mobile":"Vous avez termin\u00e9 votre inscription \u00e0 OpenStreetMap.\nChoisissez maintenant une adresse courriel et un mot de passe pour votre compte Wheelmap et tout sera pr\u00eat ! Vous aurez besoin de cette adresse courriel et de ce mot de passe pour vous connecter \u00e0 l'appli Wheelmap pour iPhone ou Android.","text":"Comment pouvons-nous vous joindre ? Vous pourrez changer cette information ult\u00e9rieurement dans votre profil."}},"edit":{"headline":{"your_images":"Vos images t\u00e9l\u00e9vers\u00e9es"}}},"wheelchairstatus":{"limited":"partiellement accessible en fauteuil roulant","no":"non accessible en fauteuil roulant","unknown":"\u00e9tat inconnu","yes":"accessible en fauteuil roulant"},"wheelmap":{"footer":{"a_project_of":"Un projet par","based_on":"Bas\u00e9 sur","become_a_supporter":"Soutenez Wheelmap","main_supporter":"Partisans principaux"},"itunes":{"alt":"Logo App Store","title":"T\u00e9l\u00e9charger l'appli pour iPhone maintenant !"},"logo":{"alt":"Logo Wheelmap - trouver des lieux accessibles en fauteuil roulant","title":"Wheelmap - trouver des lieux accessibles en fauteuil roulant"},"what_is":{"fully_accessible":"Aucune marche, ni \u00e0 l'entr\u00e9e, ni dans les pi\u00e8ces, toilettes accessibles si habituel pour un tel lieu","limited_accessible":"L'entr\u00e9e \u00e0 une marche (hauteur max. 7 cm/2,7''), la plupart des pi\u00e8ces n'en ont pas, les toilettes ne sont pas accessibles","not_accessible":"L'entr\u00e9e a des marches (hautes), les pi\u00e8ces ne sont pas accessibles","unknown_accessible":"Aidez-nous en marquant les lieux !"}},"will_paginate":{"next_label":"Suivant &#8594;","page_entries_info":{"multi_page":"Affichant %{model} %{from} -%{to} de %{count} au total","multi_page_html":"Affichant %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> de <b>%{count}</b> au total","single_page":{"one":"Affichant 1 %{model}","other":"Affichant tous les %{count} %{model}","zero":"%{model} introuvable"},"single_page_html":{"one":"Affichant <b>1</b> %{model}","other":"Affichant <b>all&nbsp;%{count}</b> %{model}","zero":"%{model} introuvable"}},"page_gap":"&hellip;","previous_label":"&#8592; Pr\u00e9c\u00e9dent"},"active_admin":{"dashboard":"Tableau de Bord","dashboard_welcome":{"welcome":"Bienvenue dans Active Admin. Ceci est la page par d\u00e9faut.","call_to_action":"Pour ajouter des sections au tableau de bord, consultez 'app/admin/dashboard.rb'"},"view":"Voir","edit":"Modifier","delete":"Supprimer","delete_confirmation":"\u00cates-vous certain de vouloir supprimer ceci ?","new_model":"Nouveau %{model}","create_model":"Nouveau %{model}","edit_model":"Modifier %{model}","update_model":"Modifier %{model}","delete_model":"Supprimer %{model}","details":"D\u00e9tails de %{model}","cancel":"Annuler","empty":"Vide","previous":"Pr\u00e9c\u00e9dent","next":"Suivant","download":"T\u00e9l\u00e9charger:","has_many_new":"Ajouter un nouveau %{model}","has_many_delete":"Supprimer","has_many_remove":"Enlever","filters":{"buttons":{"filter":"Filtrer","clear":"Supprimer les filtres"},"predicates":{"contains":"Contient","equals":"Egal \u00e0","starts_with":"Commence par","ends_with":"Se termine par","greater_than":"Plus grand que","less_than":"Plus petit que"}},"main_content":"Veuillez impl\u00e9menter %{model}#main_content pour afficher le contenu.","logout":"D\u00e9connexion","powered_by":"Propuls\u00e9 par %{active_admin} %{version}","sidebars":{"filters":"Filtres"},"pagination":{"empty":"Aucun %{model} trouv\u00e9","one":"Affichage de <b>1</b> %{model}","one_page":"Affichage de <b>tous les %{n}</b> %{model}","multiple":"Affichage de %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> sur un total de <b>%{total}</b>","multiple_without_total":"Affichage de %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>","entry":{"one":"entr\u00e9e","other":"entr\u00e9es"}},"any":"N'importe lequel","blank_slate":{"content":"Il n'y a pas encore de %{resource_name}.","link":"Cr\u00e9ez en un"},"batch_actions":{"button_label":"Actions group\u00e9es","delete_confirmation":"\u00cates-vous sur de vouloir supprimer ces %{plural_model}? Cette action est irr\u00e9versible.","succesfully_destroyed":{"one":"1 %{model} supprim\u00e9","other":"%{count} %{plural_model} supprim\u00e9s"},"selection_toggle_explanation":"(Inverser la s\u00e9lection)","link":"Cr\u00e9er un","action_label":"%{title} les \u00e9l\u00e9ments s\u00e9lectionn\u00e9s","labels":{"destroy":"Supprimer"}},"comments":{"body":"Corps","author":"Auteur","title":"Commentaire","add":"Ajouter un commentaire","resource":"Ressource","no_comments_yet":"Aucun commentaire actuellement","title_content":"Commentaires (%{count})","errors":{"empty_text":"Le commentaire n'a pas \u00e9t\u00e9 enregistr\u00e9 puisque le texte \u00e9tait vide."}},"devise":{"login":{"title":"login","remember_me":"Se souvenir de moi","submit":"login"},"reset_password":{"title":"Vous avez oubli\u00e9 votre mot de passe?","submit":"R\u00e9initialiser mon mot de passe"},"change_password":{"title":"Changez votre mot de passe","submit":"Changer mon mot de passe"},"links":{"sign_in":"Connectez-vous","forgot_your_password":"Vous avez oubli\u00e9 votre mot de passe?","sign_in_with_omniauth_provider":"Connectez-vous avec %{provider}"}}}}};