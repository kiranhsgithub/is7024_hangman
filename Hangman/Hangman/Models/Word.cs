using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hangman.Models
{
    public class Word
    {
        public int Id { get; set; }

        public virtual int CategoryId { get; set; }

        public virtual Category Category { get; set; }

        public virtual int LevelId { get; set; }

        public virtual Level Level { get; set; }

        public string Spelling { get; set; }
    }
}