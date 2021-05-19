<?php include "header.view.php" ?>
<style>
  .selected{
    border:2px solid red;
  }
</style>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Blank Page</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Blank Page</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Title</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
              <i class="fas fa-minus"></i></button>
            <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fas fa-times"></i></button>
          </div>
        </div>
        <div class="card-body">
        <div class="row">
            <div class="col-md-12">
                <a class="col-md-4" href="theam.php?theam=soso"><img <?php if($setting->getSetting("theam")->value_settings == 'soso'): echo 'class="selected"'; endif; ?>   height="200px" src="../img/1.png"></a>
                <a class="col-md-4" href="theam.php?theam=toto"><img <?php if($setting->getSetting("theam")->value_settings == 'toto'): echo 'class="selected"'; endif; ?> height="200px" src="../img/2.png"></a>
                <a class="col-md-4" href="theam.php?theam=koko"><img <?php if($setting->getSetting("theam")->value_settings == 'koko'): echo 'class="selected"'; endif; ?> height="200px" src="../img/3.png"></a>            </div>
        </div>
        
        </div>
        <!-- /.card-body -->
        <div class="card-footer">
          Footer
        </div>
        <!-- /.card-footer-->
      </div>
      <!-- /.card -->

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <?php  include "footer.view.php" ?>
