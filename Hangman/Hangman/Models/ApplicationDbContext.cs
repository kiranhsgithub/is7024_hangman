using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hangman.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public System.Data.Entity.DbSet<Hangman.Models.Category> Categories { get; set; }

        public System.Data.Entity.DbSet<Hangman.Models.Level> Levels { get; set; }

        public System.Data.Entity.DbSet<Hangman.Models.Word> Words { get; set; }
    }
}