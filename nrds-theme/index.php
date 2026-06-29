<?php
/* Fallback-Template – wird nur verwendet, wenn kein spezifisches Template greift */
get_header();
?>
<main style="padding:4rem 2rem;font-family:sans-serif;text-align:center;">
  <h1><?php the_title(); ?></h1>
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <?php the_content(); ?>
  <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>
