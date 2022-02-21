<?php

namespace App\Contracts;

use Illuminate\Http\Request;

interface RepositoryInterface
{
    public function all();

    public function create(Request $request);

    public function edit($id);

    public function update($id, Request $request);

    public function delete($id);
}
