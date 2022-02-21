<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\FuncionarioRepository;


class FuncionarioController extends Controller
{
    private $repository;

    public function __construct(FuncionarioRepository $repository)
    {
        $this->repository = $repository;
    }
    public function index()
    {
        return   response()->json($this->repository->all());
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'nome' => 'required',
            'cpf' => 'required',
            'login' => 'required',
            'senha' => 'required',
            'endereco' => 'required',

        ]);

        $this->repository->create($request);

        return response()->json('Funcionário criado');
    }
    public function edit($id)
    {
        return response()->json($this->repository->edit($id));
    }
    public function update($id, Request $request)
    {

        $this->validate($request, [
            'nome' => 'required',
            'cpf' => 'required',
            'login' => 'required',
            'endereco' => 'required',
        ]);

        $this->repository->update($id, $request);

        return response()->json('Funcionário atualizado');
    }
    public function destroy($id, Request $request)
    {
        $this->repository->delete($id);

        return response()->json('Funcionário Deletado');
    }
}
