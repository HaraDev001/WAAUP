<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWesFastUrlTemp extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('wes_fast_url_temp')==false) {
            Schema::connection('waaupdb')->create('wes_fast_url_temp', function (Blueprint $table) {
                $table->id();
                $table->string('email')->nullable();
                $table->string('address')->nullable();
                $table->tinyInteger('status')->default(0);
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
        Schema::dropIfExists('wes_fast_url_temp');
    }
}
