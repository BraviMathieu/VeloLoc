<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a href="/velos" class="nav-link">
            <span>Nos vélos</span></a>
        </li>
        <li class="nav-item">
          <a href="/paiement" class="nav-link">
            <span>Paiement</span></a>
        </li>
        <li class="nav-item">
          <a href="/payer" class="nav-link">
            <span>Payer</span></a>
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav dropdown-menu-right mr-auto mt-2 mt-lg-0">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Mon compte
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/modify">Modifier mes informations</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/register">Créer un compte</a>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>
