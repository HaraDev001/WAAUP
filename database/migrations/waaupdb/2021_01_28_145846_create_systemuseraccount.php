<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSystemuseraccount extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('systemuseraccount')==false) {
            Schema::connection('waaupdb')->create('systemuseraccount', function (Blueprint $table) {
                $table->id();
                $table->integer('userid')->nullable();
                $table->text('general')->nullable();
                $table->text('general_add')->nullable();
                $table->text('information')->nullable();
                $table->text('information_add')->nullable();
                $table->text('senior')->nullable();
                $table->text('senior_add')->nullable();
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
        Schema::dropIfExists('systemuseraccount');
    }
}
