<?php

namespace App\Repositories;

use Illuminate\Support\Collection;
use App\Contracts\RepositoryInterface;
use App\Models\Funcionario;
use Illuminate\Http\Request;


class FuncionarioRepository implements RepositoryInterface
{
    private $model;

    public function __construct(Funcionario $model)
    {
        $this->model = $model;
    }
    public function all(): Collection
    {
        return $this->model->all();
    }
    public function create($request)
    {
        return  $this->model::create($request->all());
    }

    public function edit($id)
    {
        $cadastro = $this->model::with('empresas')->find($id);

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
