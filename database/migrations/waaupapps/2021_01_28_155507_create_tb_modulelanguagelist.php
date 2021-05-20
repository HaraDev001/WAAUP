<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbModulelanguagelist extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupapps')->hasTable('tb_modulelanguagelist')==false) {
            Schema::connection('waaupapps')->create('tb_modulelanguagelist', function (Blueprint $table) {
                $table->id();
                $table->string('name', 50)->nullable();
                $table->string('languagenames', 50)->nullable();
                $table->integer('style')->default(0);
                $table->string('icon_name')->nullable();
                $table->string('icon_size')->nullable();
                $table->string('icon_style')->nullable();
                $table->string('icon_capacity')->nullable();
                $table->string('icon_imgtype')->nullable();
                $table->text('text_name')->nullable();
                $table->integer('text_minvalue')->default(0);
                $table->integer('text_maxvalue')->default(0);
                $table->integer('text_fontsize')->default(0);
                $table->string('text_color')->default('0');
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
        Schema::dropIfExists('tb_modulelanguagelist');
    }
}
