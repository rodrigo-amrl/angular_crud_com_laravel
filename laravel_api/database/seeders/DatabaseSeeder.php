<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\Cliente;
use App\Models\Funcionario;
use App\Models\Empresa;
use App\Models\EmpresaCliente;
use App\Models\EmpresaFuncionario;





class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $i = 0;
        for ($i = 0; $i < 5; $i++) {
            $cliente = Cliente::create([
                'nome' => "Cliente " . $i,
                'login' => Str::random(10),
                'endereco' => Str::random(10),
                'cpf' =>  '11111111111',
                'senha' => Hash::make('password'),
            ]);
            $funcionario =    Funcionario::create([
                'nome' => "Funcionario " . $i,
                'login' => Str::random(10),
                'endereco' => Str::random(10),
                'cpf' =>  '11111111111',
                'senha' => Hash::make('password'),
            ]);
            $empresa =   Empresa::create([
                'nome' => "Empresa " . $i,
                'endereco' => Str::random(10),
                'cnpj' =>  '11111111111111',
            ]);

            EmpresaFuncionario::create([
                'funcionario_id' => $funcionario->id,
                'empresa_id' =>  $empresa->id,
            ]);
            EmpresaCliente::create([
                'funcionario_id' => $cliente->id,
                'empresa_id' =>  $empresa->id,
            ]);
        }
    }
}

