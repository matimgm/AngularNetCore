using AngularNetCore.Model.Producto.Tipo;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AngularNetCore.Controllers.DatosFalsos
{
    public class DatosFalsosProductosController
    {

        // Datos Falsos Para Probar
        public List<Model.Productos> ObtenerUltimosProductosFalsos()
        {
            var ultimosProductos = new List<Model.Productos>();
            var listCategoria = ObtenerListCategoria();
            var listMarcas = ObtenerMarcas();

            var fechaHoy = DateTime.Now;


            //TV
            ultimosProductos.Add(new Model.Productos { Id = 1, Descripcion = "Smart TV Samsung 40 Full HD", Categoria = listCategoria.Find(x => x.Id == 1), Marca = listMarcas.Find(x => x.Id == 1), Precio = 1000, FechaAlta = fechaHoy });
            ultimosProductos.Add(new Model.Productos { Id = 2, Descripcion = "Smart TV Philips 32", Categoria = listCategoria.Find(x => x.Id == 1), Marca = listMarcas.Find(x => x.Id == 2), Precio = 1000 });
            ultimosProductos.Add(new Model.Productos { Id = 3, Descripcion = "TV LED Noblex 32", Categoria = listCategoria.Find(x => x.Id == 1), Marca = listMarcas.Find(x => x.Id == 3), Precio = 1000 });


            //Celulares
            ultimosProductos.Add(new Model.Productos { Id = 4, Descripcion = "Celular Libre Samsung J2 PRIME Dorado", Categoria = listCategoria.Find(x => x.Id == 2), Marca = listMarcas.Find(x => x.Id == 1), Precio = 1000, FechaAlta = fechaHoy });
            ultimosProductos.Add(new Model.Productos { Id = 5, Descripcion = "Celular Libre Motorola Moto Z2 play Dorado", Categoria = listCategoria.Find(x => x.Id == 2), Marca = listMarcas.Find(x => x.Id == 4), Precio = 1000 });
            ultimosProductos.Add(new Model.Productos { Id = 6, Descripcion = "Celular Libre Apple iPhone 7 Plus MNQQ2LE/A Rosa 32GB", Categoria = listCategoria.Find(x => x.Id == 2), Marca = listMarcas.Find(x => x.Id == 5), Precio = 1000, FechaAlta = fechaHoy });


            return ultimosProductos;
        }

        public List<Categoria> ObtenerListCategoria()
        {
            var listCategoria = new List<Categoria>
            {
                new Categoria { Id = 1, Descripcion = "Televisores" },
                new Categoria { Id = 2, Descripcion = "Celulares" },
                new Categoria { Id = 3, Descripcion = "Tecnología" },
                new Categoria { Id = 4, Descripcion = "Electrodomésticos" },
                new Categoria { Id = 5, Descripcion = "Más categorías" }
            };
            return listCategoria;
        }

        public List<Marca> ObtenerMarcas()
        {
            var listCategoria = ObtenerListCategoria();
            var listMarcas = new List<Marca>
            {
                new Marca { Id = 1, Categorias = listCategoria.Where(x => x.Id == 1 && x.Id == 2 && x.Id == 3).ToList()  ,Descripcion = "Samsung" },
                new Marca { Id = 2,   Categorias = listCategoria.Where(x => x.Id == 1 && x.Id == 2 && x.Id == 3).ToList(), Descripcion = "Philips" },
                new Marca { Id = 3, Categorias = listCategoria.Where(x => x.Id == 1 && x.Id == 2 && x.Id == 3).ToList(),  Descripcion = "Noblex" },
                new Marca { Id = 4,  Categorias = listCategoria.Where(x => x.Id == 1 && x.Id == 3).ToList(), Descripcion = "Motorola" },
                new Marca { Id = 5, Categorias = listCategoria.Where(x => x.Id == 1).ToList(), Descripcion = "Apple" },
                new Marca { Id = 6, Categorias = listCategoria.Where(x => x.Id == 1 && x.Id == 2 && x.Id == 3).ToList(), Descripcion = "Sony" }
            };

            return listMarcas;
        }

    }
}
