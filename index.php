<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = 'index';

require_once "header.php";
?>

<section class="section">
  <div class="container">
    <?php
    foreach ($menu as $line) {
      if ( count($line) == 1 ) {
        $item = constant("MODELS")[ $line[0] ];
    ?>
    <!-- Line -->
    <div class="columns">
      <div class="column is-12">
        <!-- CARD -->
        <div class="card">
          <div class="card-image">
            <a href="<?php echo $item[1]; ?>">
              <figure class="image is-3by1">
                <img src="assets/<?php echo $item[2]; ?>" alt="<?php echo $item[3]; ?>">
              </figure>
            </a>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4 has-text-centered">
                  <a href="<?php echo $item[1]; ?>"><?php echo $item[4]; ?></a>
                </p>
              </div>
            </div>
            <div class="content">
              <p>
                <?php echo $item[5]; ?>
              </p>
            </div>
          </div>
        </div>
        <!-- /CARD -->
      </div>
    </div>
    <?php
      } else {
    ?>
    <!-- Line -->
    <div class="columns">
    <?php
        foreach ($line as $item) {
          if ($item) {
            $item = constant("MODELS")[ $item ];
    ?>
    <div class="column is-4">
      <!-- CARD -->
      <div class="card">
        <div class="card-image">
          <a href="<?php echo $item[1]; ?>">
            <figure class="image is-3by1">
              <img src="assets/<?php echo $item[2]; ?>" alt="<?php echo $item[3]; ?>">
            </figure>
          </a>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-centered">
                <a href="<?php echo $item[1]; ?>"><?php echo $item[4]; ?></a>
              </p>
            </div>
          </div>
          <div class="content">
            <p>
              <?php echo $item[5]; ?>
            </p>
          </div>
        </div>
      </div>
      <!-- /CARD -->
    </div>
    <?php
          }
        }
    ?>
    </div>
    <?php
      }
    }
    unset($item);
    ?>
  </div>
</section>

<?php
require_once "footer.php";
?>
