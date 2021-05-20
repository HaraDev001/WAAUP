<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCountrynameToUserinfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasColumn('userinfo', 'countryname')==false)
        Schema::connection('waaupdb')->table('userinfo', function (Blueprint $table) {
            $table->string('countryname', 50)->default('en')->after('countrycode');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('waaupdb')->table('userinfo', function (Blueprint $table) {
            //
        });
    }
}
