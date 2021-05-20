<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbPagelogin extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupglobal')->hasTable('tb_pagelogin')==false) {
            Schema::connection('waaupglobal')->create('tb_pagelogin', function (Blueprint $table) {
                $table->id();
                $table->string('trans', 50)->index()->nullable();
                $table->text('sharing')->nullable();
                $table->integer('is_shar')->default(0);
                $table->text('instruction')->nullable();
                $table->integer('is_instr')->default(0);
                $table->string('background', 1024)->nullable();
                $table->integer('is_bg')->default(0);
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
        Schema::dropIfExists('tb_pagelogin');
    }
}
