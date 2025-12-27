<footer class="footer">
  <div class="content has-text-centered">
    <p>
      <a id="insulin" data-clipboard-text="CONFORME DEXTRO:
< 180 : NÃO aplicar
180-200 : 02 UI
201-250 : 04 UI
251-300 : 06 UI
301-350 : 08 UI
351-400 : 10 UI
> 400 : 12 UI + sinalizar equipe médica"><strong><?php echo constant("APP_NAME"); ?></strong></a>
      por <a href="https://nereare.com"><?php echo constant("APP_AUTHOR"); ?></a>.
      O código-fonte está licenciado sob a
      <a href="https://firstdonoharm.dev/">Licença Hipocrática</a>
      .
    </p>
    <p>Feito com lógica e evidências científicas &#128211;</p>
  </div>
</footer>

<?php if ( !isset($_COOKIE["accept_cookies"]) && !isset($_SESSION["cookies"]) ) { ?>
  <div class="modal is-active" id="cookie-consent">
    <div class="modal-background"></div>
    <div class="modal-content">
      <article class="message is-warning">
        <div class="message-header">
          <p>
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-cookie-alert mdi-24px"></i>
              </span>
              <span>Alerta de Cookies</span>
            </span>
          </p>
        </div>
        <div class="message-body">
          <p>Este site usa <em>cookies</em> para oferecer a melhor experiência possível a seus usuários.</p>
          <p>Ao continuar o uso deste site, você concorda com o uso destes.</p>
          <p>Para mais informações, leia nossa <a href="cookies.php">Política de Cookies</a>.</p>
          <p class="has-text-centered">
            <button class="button is-success" id="cookie-accept">Condordo</button>
            <button class="button" id="cookie-reject">Não concordo</button>
          </p>
        </div>
      </article>
    </div>
  </div>
<?php } ?>
</body>
</html>
