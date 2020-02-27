<template>
  <nav>
    <div class="nav" id="nav10">
      <ul>
        <li><a href="/"><i class="fas fa-home"></i></a></li>
        <li><a href="#"><i class="fas fa-wrench"></i>
          <span>Services
              <i class="fa fa-chevron-down"></i>
            </span></a>
          <ul  class="sublevel menu">
            <li><a href="#">Link #1 - Level 1</a></li>
            <li><a href="#">Link #2 - Level 1 <i class="fa fa-chevron-right"></i></a>
              <ul  class="sublevel menu">
                <li><a href="#">Link #1 - Level 1</a></li>
                <li><a href="#">Link #2 - Level 1</a></li>
                <li><a href="#">Link #3 - Level 1</a></li>
                <li><a href="#">Link #4 - Level 1</a></li>
              </ul>
            </li>
            <li><a href="#">Link #3 - Level 1</a></li>
            <li><a href="#">Link #4 - Level 1</a></li>
            <li><a href="#">Link #5 - Level 1 <i class="fa fa-chevron-right"></i></a>
              <ul  class="sublevel menu">
                <li><a href="#">Link #1 - Level 2</a></li>
                <li><a href="#">Link #2 - Level 2<i class="fa fa-chevron-right"></i></a>
                  <ul  class="sublevel menu">
                    <li><a href="#">Link #1 - Level 3</a></li>
                    <li><a href="#">Link #2 - Level 3</a></li>
                    <li><a href="#">Link #3 - Level 3</a></li>
                    <li><a href="#">Link #4 - Level 3</a></li>
                  </ul>
                </li>
                <li><a href="#">Link #3 - Level 2</a></li>
                <li><a href="#">Link #4 - Level 2</a></li>
              </ul>
            </li>
            <li><a href="#">Link #6 - Level 1</a></li>
          </ul>
        </li>
        <li><a href="/velos"><i class="fas fa-bicycle "></i><span>Nos vélos</span></a></li>
        <li><a href="/paiement"><i class="fas fa-shopping-basket"></i><span>Paiement</span></a></li>
        <li><a href="/payer"><i class="fas fa-credit-card"></i><span>Payer</span></a></li>
        <li><a href=""><i class="fas fa-user"></i><span>Mon compte
              <i class="fa fa-chevron-down"></i></span></a>
          <ul  class="sublevel menu">
            <li><a href="/register">Créer un compte</a></li>
            <li><a href="/modify">Modifier mes informations</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>
