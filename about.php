<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = 'about';

require_once "header.php";
?>

<section class="section">
  <div class="container">
    <div class="content">
      <h1>Sobre o <em>Modelo de Prontuários</em></h1>
      <h2>
        <span class="icon-text">
          <span class="icon">
            <i class="mdi mdi-alert-circle"></i>
          </span>
          <span>IMPORTANTE</span>
        </span>
      </h2>
      <p><strong>Esse projeto não substitui acompanhamento com um profissional capacitado e registrado em seu respectivo conselho de classe.</strong></p>
      <p><strong>Ele não deve ser usados sem suporte de um profissional de saúde capacitado.</strong></p>
      <p>Procure a Unidade Básica de Saúde mais próxima da sua residência! <span class="icon"><i class="mdi mdi-hospital-building"></i></span></p>
      <h2>Aviso Legal</h2>
      <p>O uso desses materiais é feito por escolha do profissional.</p>
      <p>Este projeto e seus membros não se responsabilizam por qualquer informação contida em seus materiais ou uso inadequado desses. Qualquer inacurácia ou desatualização devem ser remediados por estudo do próprio profissional, o qual, ao usar esses guias, assume responsabilidade para si no caso de uso de informação desatualizada ou inacurada, uma vez que sua conduta pessoal é exclusivamente de sua resposabilidade.</p>
      <p>Esse projeto é <strong>fonte aberta</strong> (<em>open source</em>), portanto nós encorajamos não só o uso dos recursos, mas a participação <a href="https://github.com/Nereare/modelos-pront/blob/master/CODE-OF-CONDUCT.md">saudável</a> para <a href="https://github.com/Nereare/modelos-pront/blob/master/CONTRIBUTING.md">melhorar o conteúdo disponível</a>, permitindo que estes estejam sempre o mais atualizados o possível.</p>
      <h2>Aviso Ético</h2>
      <p>De acordo com os princípios éticos vigentes [<a href="https://www.cremesp.org.br/?siteAcao=Publicacoes&amp;acao=detalhes_capitulos&amp;cod_capitulo=26">1</a>, <a href="https://www.cremesp.org.br/?siteAcao=Publicacoes&amp;acao=detalhes_capitulos&amp;cod_capitulo=27">2</a>], esse projeto tem por objetivo expôr conteúdo educativo a profissionais da área da saúde, especialmente aqueles com nível superior e que atuem em atenção básica, visando facilitar o uso dos conhecimentos atualizados que <strong>esse projeto assume que o profissional já tenha</strong>.</p>
      <p>Esse projeto <strong>não se destina a assistência direta</strong>, nós <strong>não oferecemos consultas ou suporte clínico</strong> através desse projeto, e nem o projeto nem nenhum de seus membros <strong>pedirá dados pessoais</strong> em nenhum momento para do projeto.</p>
      <p>O <em>Modelo de Prontuários</em> é um recurso exclusivamente didático e não recebe suporte, financeiro ou de qualquer outra natureza, de nenhuma empresa. O projeto é voluntário e todos os seus membros participam sem fins lucrativos pessoais.</p>
      <h2>Sobre o Uso dos Dados</h2>
      <p>Todos os dados fornecidos nos formulários dos modelos (<em>e.g.</em> modelo de pré-natal) são processados e mantidos apenas no <em>client side</em> (na máquina do usuário) e não são, em nenhum momento, enviados para outro local. Todo o processamento desses dados é feito através de <em>scripts</em> locais.</p>
      <p>Os dados fornecidos na página de configuração são enviados ao nosso servidor para processamento. Sugerimos não incluir dados pessoais ou sensitivos nesta página, cujos dados podem ser obtidos na rede.</p>
      <blockquote>
        <p>Atualizado em 30 de março de 2022 às 10h15min.</p>
      </blockquote>
    </div>
  </div>
</section>

<?php
require_once "footer.php";
?>
