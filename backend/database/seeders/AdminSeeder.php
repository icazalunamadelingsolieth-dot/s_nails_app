public function run(): void
{
    \App\Models\User::create([
        'name' => 'Root Admin',
        'email' => 'admin@snails.com',
        'password' => bcrypt('admin123'), // Contraseña encriptada
    ]);
}