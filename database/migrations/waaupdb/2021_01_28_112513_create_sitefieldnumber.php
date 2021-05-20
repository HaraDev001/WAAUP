<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitefieldnumber extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('sitefieldnumber')==false) {
            Schema::connection('waaupdb')->create('sitefieldnumber', function (Blueprint $table) {
                $table->id();
                $table->string('fname')->nullable();
                $table->integer('fnumber')->default(0);
                $table->integer('fontsize')->default(0);
                $table->integer('flineheight')->default(0);
                $table->string('fweightstyle')->nullable();
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
        Schema::dropIfExists('sitefieldnumber');
    }
}
