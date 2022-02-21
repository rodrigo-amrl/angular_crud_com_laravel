<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\EmpresaRepository;


class EmpresaController extends Controller
{
    private $repository;

    public function __construct(EmpresaRepository $repository)
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
            'cnpj' => 'required',
            'endereco' => 'required',

        ]);

        $this->repository->create($request);

        return response()->json('Empresa criada');
    }
    public function edit($id)
    {
        return response()->json($this->repository->edit($id));
    }
    public function update($id, Request $request)
    {

        $this->validate($request, [
            'nome' => 'required',
            'cnpj' => 'required',
            'endereco' => 'required',
        ]);

        $this->repository->update($id, $request);

        return response()->json('Empresa atualizada');
    }
    public function destroy($id, Request $request)
    {
        $this->repository->delete($id);

        return response()->json('Empresa Deletada');
    }
}
