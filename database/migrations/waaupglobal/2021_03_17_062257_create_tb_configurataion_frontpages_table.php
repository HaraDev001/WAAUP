<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbConfigurataionFrontpagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupglobal')->hasTable('tb_configurataion_frontpages')==false) {
            Schema::connection('waaupglobal')->create('tb_configurataion_frontpages', function (Blueprint $table) {
                $table->id();
                $table->string('page_name', 50)->nullable();
                $table->text('page_title')->nullable();
                $table->string('user_name', 50)->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrent();
                $table->string('g_path', 50)->default('remote');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_configurataion_frontpages');
    }
}
