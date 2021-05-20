<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSystemusermanagedepartment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('systemusermanagedepartment')==false) {
            Schema::connection('waaupdb')->create('systemusermanagedepartment', function (Blueprint $table) {
                $table->id();
                $table->integer('userid')->nullable();
                $table->string('name')->nullable();
                $table->integer('d_id')->nullable();
                $table->text('permissions')->nullable();
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
        Schema::dropIfExists('systemusermanagedepartment');
    }
}
