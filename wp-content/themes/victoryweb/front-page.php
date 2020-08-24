<?php get_header(); ?>

 <?php while (have_posts()) : the_post(); ?>
    <div id="main-app"></div>
<?php endwhile; ?>

<?php get_footer(); ?>