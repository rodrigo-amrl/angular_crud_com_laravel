<?php

namespace App\Repositories;

use Illuminate\Support\Collection;
use App\Contracts\RepositoryInterface;
use App\Models\Empresa;
use Illuminate\Http\Request;


class EmpresaRepository implements RepositoryInterface
{
    private $model;

    public function __construct(Empresa $model)
    {
        $this->model = $model;
    }
    public function all(): Collection
    {
        return $this->model::orderBy('nome')->get();
    }
    public function create($request)
    {
        return  $this->model::create($request->all());
    }

    public function edit($id)
    {
        $cadastro = $this->model::with(['clientes','funcionarios'])->find($id);

        return  $cadastro;
    }

    public function update($id, Request $request)
    {
        $data = $this->model->find($id);
        $data->fill($request->all())->save();
        return  $data;
    }

    public function delete($id)
    {
        return  $this->model->where('id', $id)->delete();
    }
}
